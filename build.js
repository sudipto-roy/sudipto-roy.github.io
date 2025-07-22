const { minify } = require('html-minifier-terser');
var fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

async function buildTailwindCSS(inputPath, outputPath) {
  try {
    const command = `npx tailwindcss -i "${inputPath}" -o "${outputPath}" --minify`;

    console.log(`Executing: ${command}`);

    const { stdout, stderr } = await new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing Tailwind CSS: ${error}`);
          reject({ error, stdout, stderr });
          return;
        }
        resolve({ stdout, stderr });
      });
    });

    console.log('Tailwind CSS build successful!');
    if (stdout) {
      console.log('Stdout:', stdout);
    }
    if (stderr) {
      console.log('Stderr:', stderr);
    }

  } catch (errorObject) {
    console.error('Tailwind CSS build failed.');
    if (errorObject.stdout) {
      console.error('Stdout:', errorObject.stdout);
    }
    if (errorObject.stderr) {
      console.error('Stderr:', errorObject.stderr);
    }
  }
}

async function buildVersion(version = 'latest') {
  const isV1 = version === 'v1';
  const prefix = isV1 ? 'v1/' : '';
  
  console.log(`Building ${version} version...`);
  
  // Build Tailwind CSS for this version
  const inputPath = path.resolve(`./${prefix}src/files/styles/style.css`);
  const outputPath = path.resolve(`./${prefix}src/files/styles/dist/style.css`);
  await buildTailwindCSS(inputPath, outputPath);

  // Build HTML for this version
  const htmlInputPath = `${prefix}src/index.html`;
  const htmlOutputPath = isV1 ? 'v1/index.html' : 'index.html';
  
  fs.readFile(htmlInputPath, 'utf8', async function (err, data) { 
    if (err) {
      return console.log(err);
    }
    var result = await minify(data, {collapseWhitespace: true, removeComments: true});
    fs.writeFile(htmlOutputPath, result, function (err) {
      if (err) return console.log(err);
      console.log(`${version} HTML built successfully!`);
    });
  });

  // Copy files for this version
  const filesSource = `${prefix}src/files`;
  const filesDest = isV1 ? 'v1/files' : 'files';
  
  fs.cp(filesSource, filesDest, {recursive: true}, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${version} files copied successfully!`);
    }
  });
}

// Build both versions
async function buildAll() {
  console.log('Starting build process...');
  
  // Build v1 first (preserve current version)
  await buildVersion('v1');
  
  // Build latest version
  await buildVersion('latest');
  
  console.log('All versions built successfully!');
}

// Call the function to execute the build
buildAll();
