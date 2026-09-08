export default function ConfigurationPage() {
  return (
    <div>
      <h1>Configuration Reference</h1>
      <p>
        This page documents the configuration options for both the VDR
        application and the documentation site.
      </p>

      <h2>Documentation Site — vercel.json</h2>
      <p>
        The documentation project includes a <code>vercel.json</code> at the
        project root. For a standard Next.js app-router deployment, the file
        can be minimal:
      </p>
      <pre><code>{`{
  "version": 2,
  "buildCommand": "next build",
  "framework": "nextjs"
}`}</code></pre>

      <h2>Next.js Configuration (next.config.mjs)</h2>
      <p>
        The <code>next.config.mjs</code> file can be customized for:
      </p>
      <table>
        <thead>
          <tr>
            <th>Setting</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>output</code></td>
            <td>
              <code>&quot;export&quot;</code> for static export, or default for Vercel
              full-stack deployment
            </td>
          </tr>
          <tr>
            <td><code>distDir</code></td>
            <td>Customize build output directory</td>
          </tr>
          <tr>
            <td><code>images.remotePatterns</code></td>
            <td>Allow external image domains for <code>next/image</code></td>
          </tr>
          <tr>
            <td><code>headers</code></td>
            <td>Add security headers (CSP, X-Frame-Options)</td>
          </tr>
        </tbody>
      </table>

      <h2>VDR Application Configuration</h2>
      <p>
        The VDR ERP application configuration lives inside{" "}
        <code>task.dat</code> under these sections:
      </p>

      <h3>Database Type (<code>db_type</code>)</h3>
      <p>
        Currently set to <code>4</code>, indicating the database backend used
        by Jam.py. Other values correspond to alternate database engines
        supported by the framework.
      </p>

      <h3>System Roles (<code>sys_roles</code>)</h3>
      <p>
        Define user roles. Each role can be granted a set of privileges. Add a
        role by inserting a new record with a unique role ID and name.
      </p>

      <h3>Privileges (<code>sys_privileges</code>)</h3>
      <p>
        Grant per-module and per-action permissions. Typical permission levels:
      </p>
      <table>
        <thead>
          <tr>
            <th>Permission</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>View</code></td>
            <td>Read records in the module</td>
          </tr>
          <tr>
            <td><code>Edit</code></td>
            <td>Modify existing records</td>
          </tr>
          <tr>
            <td><code>Delete</code></td>
            <td>Remove records</td>
          </tr>
          <tr>
            <td><code>Post</code></td>
            <td>Post journals to the ledger</td>
          </tr>
          <tr>
            <td><code>Approve</code></td>
            <td>Approve transactions (final sign-off)</td>
          </tr>
        </tbody>
      </table>

      <h3>Lookup Lists (<code>sys_lookup_lists</code>)</h3>
      <p>Customize dropdown options. Editing these changes selectable values across the app.</p>

      <h3>Parameters (<code>sys_params</code>)</h3>
      <p>Global parameters used by the application, such as:</p>
      <ul>
        <li>Company name and address</li>
        <li>Tax settings</li>
        <li>Currency configuration</li>
        <li>Commission rules</li>
        <li>Report defaults (company logo, footer text)</li>
      </ul>

      <h3>Report Parameters (<code>sys_report_params</code>)</h3>
      <p>
        Per-report parameter definitions control which filters appear in the
        report export dialog.
      </p>

      <h2>Frontend Configuration</h2>
      <p>
        Frontend behavior is controlled from <code>index.html</code> and{" "}
        <code>js/g.js</code>:
      </p>
      <ul>
        <li>
          <strong>CDN dependencies</strong> — jQuery UI, Plotly, PivotTable,
          TinyMCE, Chart.js, SheetJS are loaded from CDNs in{" "}
          <code>index.html</code>
        </li>
        <li>
          <strong>Custom styles</strong> — <code>css/project.css</code> holds
          project-specific overrides (responsive tables, custom colors)
        </li>
        <li>
          <strong>Application logic</strong> — <code>js/g.js</code> holds event
          handlers for every module
        </li>
        <li>
          <strong>Static assets</strong> — <code>static/js/</code> bundles
          libraries that should be self-hosted (TinyMCE, Fancytree, QR scanner)
        </li>
      </ul>

      <h2>Security Best Practices</h2>
      <ul>
        <li>Set strong admin credentials in the <code>users</code> catalog</li>
        <li>Restrict privileges to least-privilege per role</li>
        <li>Serve over HTTPS (Vercel provides automatic TLS)</li>
        <li>Regularly back up <code>task.dat</code> and the database</li>
        <li>Keep the Jam.py framework updated</li>
      </ul>
    </div>
  );
}