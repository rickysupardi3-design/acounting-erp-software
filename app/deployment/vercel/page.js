import Link from "next/link";

export default function VercelPage() {
  return (
    <div>
      <h1>Vercel Deployment</h1>
      <p>
        This documentation site is built with Next.js and can be deployed to
        Vercel in minutes. Below are the supported deployment options.
      </p>

      <h2>Option 1: Vercel Dashboard (Recommended)</h2>
      <ol>
        <li>
          Push this project to a GitHub, GitLab, or Bitbucket repository.
        </li>
        <li>Sign in to the <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel Dashboard</a>.</li>
        <li>Click <strong>Add New → Project</strong> and import your repository.</li>
        <li>
          Vercel automatically detects Next.js and applies the recommended
          build settings:
        </li>
      </ol>
      <pre><code>Build Command:   next build
Output Directory: .next
Install Command:  npm install</code></pre>
      <p>
        Click <strong>Deploy</strong>. Vercel will provide a production URL
        (and a preview URL for each push).
      </p>

      <h2>Option 2: Vercel CLI</h2>
      <p>Deploy directly from the command line:</p>
      <pre><code># Install Vercel CLI
npm i -g vercel

# Deploy to production
cd accpunting-erp-docs
vercel --prod</code></pre>

      <h2>Option 3: Continuous Deployment (Git)</h2>
      <p>
        After connecting the repository to Vercel, enable automatic
        deployments:
      </p>
      <table>
        <thead>
          <tr>
            <th>Branch</th>
            <th>Environment</th>
            <th>Trigger</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>main</code></td>
            <td>Production</td>
            <td>Auto-deployed on every push</td>
          </tr>
          <tr>
            <td>Any other branch</td>
            <td>Preview</td>
            <td>Auto-generated preview URL on push/PR</td>
          </tr>
        </tbody>
      </table>

      <h2>vercel.json</h2>
      <p>
        This project includes a <code>vercel.json</code> configuration file.
        The default Next.js setup needs no rewrites — Vercel serves the app
        router automatically. The config is kept for reference and can be
        extended with headers or redirects as needed.
      </p>

      <h2>Environment Variables</h2>
      <p>
        This documentation site is static and requires no environment
        variables. If extended with backend integrations later, add them via
        the <strong>Settings → Environment Variables</strong> panel in the
        Vercel dashboard.
      </p>

      <h2>Production Best Practices</h2>
      <ul>
        <li>
          Enable <strong>Vercel Analytics</strong> to track site traffic
          (Settings → Analytics).
        </li>
        <li>
          Configure a <strong>custom domain</strong> under{" "}
          <code>Settings → Domains</code>.
        </li>
        <li>
          Preview every PR before merging to production.
        </li>
        <li>
          Set up the <strong>Vercel webhook</strong> with your Slack/Teams to
          receive deployment notifications.
        </li>
      </ul>

      <h2>Deploying the Full Accounting ERP Application</h2>
      <p>
        Note that the full Accounting ERP application requires a Python backend
        (Jam.py server), so it cannot run solely on Vercel&apos;s edge functions as
        a static site. Options for the full app:
      </p>
      <ul>
        <li>
          Run the Jam.py backend on a VM (e.g., Vercel marketplace partner,
          Railway, or any Python host).
        </li>
        <li>
          Use this documentation site on Vercel for the frontend/docs, and
          point to the hosted backend API.
        </li>
        <li>
          Self-host the Jam.py server and serve the Accounting ERP frontend from a CDN.
        </li>
      </ul>

      <h2>Related</h2>
      <ul>
        <li>
          <Link href="/deployment/configuration">Configuration Reference</Link>
        </li>
        <li>
          <Link href="/getting-started/installation">Installation Guide</Link>
        </li>
      </ul>
    </div>
  );
}
