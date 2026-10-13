# Yutaka Shimizu — Personal Website

A personal website presenting research interests, publications, experience, and education based on the CV.
Website URL: <https://purewater0901.github.io/>

## Preview locally

Run the following command from the repository directory:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000/> in your browser. Press `Ctrl+C` to stop the server.
The site uses HTML, CSS, and JavaScript, so a local preview requires neither Jekyll nor Node.js.

## Publish with GitHub Pages

1. Commit the updated files and push them to the `master` branch on GitHub.
2. Open **Settings → Pages** in the repository.
3. Under **Build and deployment → Source**, select **Deploy from a branch**.
4. Set **Branch** to `master` and the folder to `/(root)`, then click **Save**.
5. Check **Actions** for the completed Pages deployment, then open the website URL.

After this setup, pushes to `master` update the website. See [GitHub’s guide to configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for details.

## Files and updates

| File | Purpose |
| --- | --- |
| `index.html` | Name, biography, research interests, publications, experience, education, and contact information. Edit this file to update the page content. |
| `assets/css/style.css` | Colors, typography, layout, and mobile styles. |
| `assets/js/main.js` | Publication filters and other page interactions. |
| `assets/favicon.svg` | Icon displayed in the browser tab. |
| `CV.pdf` | Original CV available for viewing and download. |
| `_config.yml` | Site information and Jekyll settings for GitHub Pages. |

To add a publication, copy an entry within `publication-list` in `index.html`. Update its title, authors, year, links, and `data-type` (`conference`, `journal`, or `poster`).

When replacing `CV.pdf`, also update `index.html` to reflect any changes; the page content is maintained separately. When changing the site title or description, review the metadata at the top of the HTML file and in `_config.yml`.

Once published, **the original `CV.pdf` is publicly available for viewing and download**, including the contact information it contains.
