# How to Update Your Portfolio Website

This guide provides instructions on how to download, modify, and update your portfolio website.

## 1. Setting Up Your Local Environment

These steps are only necessary the first time you set up the project on a new machine.

### 1.1. Clone the Repositories

You have two repositories:

*   `site`: This contains the source code for your portfolio.
*   `geokshitij.github.io`: This contains the deployed, public-facing website.

First, open your terminal and navigate to the directory where you want to store your projects. Then, clone both repositories:

```bash
git clone https://github.com/geokshitij/site.git
git clone https://github.com/geokshitij/geokshitij.github.io.git
```

### 1.2. Install Dependencies

Navigate into the `site` directory and install the necessary dependencies using `npm`:

```bash
cd site
npm install
```

## 2. Making Changes to Your Portfolio

All changes to your portfolio content and design are made in the `site` repository.

### 2.1. Start the Development Server

To see your changes live as you make them, start the development server:

```bash
npm run dev
```

This will start a local server, and you can view your website in your browser at the address provided in the terminal (usually `http://localhost:5173`). The website will automatically reload as you save changes to the files.

### 2.2. Modify the Content

The main content of your portfolio is located in the `src/data.ts` file. You can edit this file to change the text in the "About Me" section, add or remove publications, update your experience, etc.

## 3. Building and Deploying Your Website

Once you are happy with your changes, you need to build the website and deploy it.

### 3.1. Build the Website

In the `site` directory, run the build command:

```bash
npm run build
```

This will create a `dist` directory containing the optimized, static files for your website.

### 3.2. Deploy to `geokshitij.github.io`

Now, you need to copy the contents of the `dist` directory to your `geokshitij.github.io` repository.

1.  **Clear the old files:**
    Navigate to your `geokshitij.github.io` directory and remove all the old files and folders, except for the `.git` directory.

    ```bash
    cd ../geokshitij.github.io
    rm -rf *
    ```

2.  **Copy the new files:**
    Copy the contents of the `site/dist` directory to the `geokshitij.github.io` directory.

    ```bash
    cp -r ../site/dist/* .
    ```

### 3.3. Push Your Changes

Now, you need to commit and push the changes in both repositories.

1.  **Push `geokshitij.github.io`:**
    First, commit and push the changes to your public-facing website.

    ```bash
    cd ../geokshitij.github.io
    git add .
    git commit -m "Update website"
    git push origin master
    ```

2.  **Push `site`:**
    Next, commit and push the changes to your source code.

    ```bash
    cd ../site
    git add .
    git commit -m "Update content"
    git push origin main
    ```

That's it! Your updated portfolio should now be live at [https://geokshitij.github.io/](https://geokshitij.github.io/).
