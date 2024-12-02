# Visual Regression Testing Framework with BackstopJS



This project is a visual regression testing framework using [BackstopJS](https://github.com/garris/BackstopJS). It helps automate the process of comparing visual snapshots of web pages to detect unintended changes.

## Features

- Visual regression testing with BackstopJS
- Configurable viewport settings
- HTML reports for visual comparison results
- Easy integration with CI/CD pipelines

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo/visual-regression-testing.git
cd visual-regression-testing
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Initialize BackstopJS (if not already initialized)

```bash
npx backstop init
```

---

## Usage

### Generate Reference Snapshots

Create the baseline snapshots to compare against:

```bash
npm run reference
```

### Run Tests

Run visual regression tests to compare current snapshots with the reference:

```bash
npm run test
```

### Approve Changes

If visual differences are intentional, approve the new snapshots:

```bash
npm run approve
```

---

## Project Structure

```plaintext
.
├── backstop.json                 # BackstopJS configuration file
├── backstop_data/                # Data directory for reference, test snapshots, and reports
│   ├── bitmaps_reference/        # Reference images
│   ├── bitmaps_test/             # Test images
│   ├── html_report/              # HTML report of test results
├── package.json                  # Node.js project configuration
├── README.md                     # Project documentation
```

---

## Configuration

The `backstop.json` file is the main configuration file. Customize it to suit your testing needs:

- **Viewports:** Define screen sizes for testing.
- **Scenarios:** Define test cases with URLs, selectors, and delays.
- **Paths:** Set custom paths for snapshots and reports.
- **Engine:** Use `puppeteer` or other supported engines.

Example configuration in `backstop.json`:

```json
{
  "id": "visual_regression_test",
  "viewports": [
    {
      "label": "desktop",
      "width": 1024,
      "height": 768
    }
  ],
  "scenarios": [
    {
      "label": "Homepage",
      "url": "https://example.com",
      "selectors": ["document"],
      "delay": 500
    }
  ],
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "html_report": "backstop_data/html_report"
  },
  "engine": "puppeteer"
}
```

---

## Common Issues and Solutions

### Permission Issues (EPERM)

Run the command as an administrator:

```bash
npm install --force
```

### Git Permission Denied

Ensure you have correct SSH keys set up or use HTTPS for Git URLs.

---

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For questions or support, contact [Komal Chowdhary](mailto:your-email@example.com).

---

Save this as `README.md` in your project directory! It provides a clear and professional introduction to your project.
