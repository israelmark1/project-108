# console-scanner

**console-scanner** is a lightweight library for reading data from the console

## Installation

```
npm install console-scanner
```

## Usage

```
const scanner = require("console-scanner");

// Scans full line
let str = scanner.nextLine();

// Scans only integers
// Float numbers will be rounded to integers
// "3e4" also is valid integer form (30000)
let intNum = scanner.nextInt();

// Scans only Floats
// "2e-2" also is valid float form (0.02)
let floatNum = scanner.nextFloat();

// Scans only first word from line
// The remaining words from the string will be queued
// and will not be lost
let word = scanner.next();
```

## History
- 0.0.2 - hotfix import errors
- 0.0.1 - Added
  - nextLine()
  - prompt()
  - next()
  - nextInt()
  - nextFloat()


## Issues and Contributing
- Your issues are welcome here: `https://github.com/artem-afonin/console-scanner/issues`
- Contributing for improving the library is welcome on GitHub: `https://github.com/artem-afonin/console-scanner`


## License

**_MIT License_**