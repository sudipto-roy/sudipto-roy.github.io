const { minify } = require('html-minifier-terser');
var fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

async function buildTailwindCSS() {
  try {
    const inputPath = path.resolve('./src/styles/style.css');
    const outputPath = path.resolve('./styles/dist/style.css');
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

// Call the function to execute the Tailwind CSS command
buildTailwindCSS();

fs.readFile('src/index.html', 'utf8', async function (err, data) { 
  if (err) {
    return console.log(err);
  }
  var result = await minify(data, {collapseWhitespace: true, removeComments: true});
  fs.writeFile('index.html', result, function (err) {
    if (err) return console.log(err);
  });
});


fs.rename('src/icons', 'icons', err => {
  if (err) {
    console.error(err);
  }
  // done
});
