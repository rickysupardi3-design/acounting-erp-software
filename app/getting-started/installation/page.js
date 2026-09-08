export default function InstallationPage() {
  return (
    <div>
      <h1>Installation Guide</h1>

      <p>
        This guide covers deploying the VDR ERP application. VDR is a Jam.py
        application that requires a Python server to handle the backend, but the
        frontend can be deployed as static files for documentation or preview
        purposes.
      </p>

      <h2>Prerequisites</h2>
      <table>
        <thead>
          <tr>
            <th>Requirement</th>
            <th>Minimum Version</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Python</td>
            <td>3.6+</td>
          </tr>
          <tr>
            <td>Jam.py Framework</td>
            <td>5.4.136</td>
          </tr>
          <tr>
            <td>Node.js (for docs)</td>
            <td>18.0+</td>
          </tr>
          <tr>
            <td>Vercel CLI (for deployment)</td>
            <td>39+</td>
          </tr>
        </tbody>
      </table>

      <h2>Full Application Setup</h2>
      <ol>
        <li>
          <strong>Install Jam.py</strong> — Install the Jam.py application
          builder following the official documentation.
        </li>
        <li>
          <strong>Deploy the application files</strong> — Place the extracted
          files in a Jam.py server directory:
          <pre><code>your-server/
├── index.html
├── task.dat
├── css/
├── js/
├── reports/
└── static/</code></pre>
        </li>
        <li>
          <strong>Configure the database</strong> — VDR uses <code>db_type: 4</code> —
          configure your database connection in the Jam.py server settings.
        </li>
        <li>
          <strong>Start the server</strong> — Launch the Jam.py server with:
          <pre><code>python jam.py serve --host 0.0.0.0 --port 8080</code></pre>
        </li>
      </ol>

      <h2>Static Deployment (Documentation Only)</h2>
      <p>
        If you only need to deploy this documentation site (not the full ERP
        backend), use Vercel or any static hosting provider:
      </p>
      <pre><code># Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
cd vdr-docs
vercel deploy</code></pre>

      <h2>Application Version</h2>
      <p>
        The current application build is version <code>1.0.0</code> with Jam.py
        engine version <code>5.4.136</code>, built on <code>2026-08-03</code>.
      </p>

      <h2>Default Credentials</h2>
      <p>
        The application includes a login form. Authentication must be
        configured in the Jam.py server administration panel. User credentials
        are stored in the <code>users</code> catalog within <code>task.dat</code>.
      </p>

      <h2>Asset Paths</h2>
      <p>
        The application references assets from two paths:
      </p>
      <table>
        <thead>
          <tr>
            <th>Path</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>jam/js/</code> and <code>jam/css/</code></td>
            <td>Jam.py framework core assets (not in the zip)</td>
          </tr>
          <tr>
            <td><code>js/</code> and <code>css/</code></td>
            <td>Application-specific customizations</td>
          </tr>
          <tr>
            <td><code>static/js/</code></td>
            <td>Bundled third-party libraries (TinyMCE, Fancytree, etc.)</td>
          </tr>
        </tbody>
      </table>
      <p>
        When deploying, ensure the <code>jam/</code> path is served correctly —
        it is provided by the Jam.py framework installation.
      </p>
    </div>
  );
}