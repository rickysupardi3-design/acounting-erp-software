export default function ArchitecturePage() {
  return (
    <div>
      <h1>System Architecture</h1>

      <p>
        VDR is built on Jam.py, a server-side Python framework that generates
        and manages the application database, UI templates, and business logic.
        The entire application schema — including field definitions, user
        privileges, lookup lists, and report configurations — is stored in a
        single JSON configuration file (<code>task.dat</code>).
      </p>

      <h2>Application Structure</h2>
      <p>
        The deployed application consists of these files and directories:
      </p>
      <pre><code>vdr-app/
├── index.html           — Main entry point, UI templates, CDN dependencies
├── task.dat             — Application schema (JSON), DB config, embedded code
├── css/                 — Custom stylesheets
│   ├── project.css      — Project-specific overrides
│   ├── pivot.css        — PivotTable styles
│   ├── jquery.dataTables.min.css
│   ├── select.dataTables.min.css
│   └── jquery-entropizer.css
├── js/                  — Application and third-party JavaScript
│   ├── g.js             — Primary client-side logic (469 KB)
│   ├── northwind_traders.js — Demo event handlers
│   ├── Chart.min.js     — Chart.js library
│   ├── pivot.js         — PivotTable.js
│   ├── tableExport.js   — Table-to-Excel export
│   └── ...              — Other libraries
├── reports/             — 57+ LibreOffice ODS report templates
│   ├── fjt_hd.ods       — Faktur Jual (Sales Invoice)
│   ├── po_hd.ods        — Purchase Order
│   ├── neraca.ods       — Balance Sheet
│   └── ...
└── static/js/           — Bundled libraries (TinyMCE, Fancytree, etc.)
</code></pre>

      <h2>task.dat — The Core Configuration</h2>
      <p>
        At approximately 1.94 MB, <code>task.dat</code> is the heart of the
        application. It is a single JSON document containing:
      </p>
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>db_type</code></td>
            <td>Database backend identifier (type 4)</td>
          </tr>
          <tr>
            <td><code>sys_items</code></td>
            <td>Complete module and field definitions</td>
          </tr>
          <tr>
            <td><code>sys_fields</code></td>
            <td>Column-level field specifications</td>
          </tr>
          <tr>
            <td><code>sys_filters</code></td>
            <td>Data filter configurations</td>
          </tr>
          <tr>
            <td><code>sys_indices</code></td>
            <td>Database index definitions</td>
          </tr>
          <tr>
            <td><code>sys_lookup_lists</code></td>
            <td>Enum definitions (status codes, currencies, etc.)</td>
          </tr>
          <tr>
            <td><code>sys_params</code></td>
            <td>Global application parameters</td>
          </tr>
          <tr>
            <td><code>sys_privileges</code></td>
            <td>Role-based access control rules</td>
          </tr>
          <tr>
            <td><code>sys_roles</code></td>
            <td>User role definitions</td>
          </tr>
          <tr>
            <td><code>sys_report_params</code></td>
            <td>Report parameter configurations</td>
          </tr>
        </tbody>
      </table>

      <h2>Module Hierarchy</h2>
      <p>
        The application tree defines four top-level module groups:
      </p>
      <table>
        <thead>
          <tr>
            <th>Module</th>
            <th>Purpose</th>
            <th>Key Items</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>catalogs</strong></td>
            <td>Master data management</td>
            <td>
              cust, stock, supl, sales, gudang, users, glmas (COA), cate
            </td>
          </tr>
          <tr>
            <td><strong>journals</strong></td>
            <td>Transaction processing</td>
            <td>
              gltrhd (GL header), tr_bank, trm_hd, so_hd, fjt_hd, rj_hd,
              po_hd, fbt_hd
            </td>
          </tr>
          <tr>
            <td><strong>inventory</strong></td>
            <td>Stock operations</td>
            <td>
              k_stock (stock card), artact, aptact, transfer, physical stock
            </td>
          </tr>
          <tr>
            <td><strong>reports</strong></td>
            <td>Report generation</td>
            <td>57 ODS templates for all modules</td>
          </tr>
        </tbody>
      </table>

      <h2>User Roles &amp; Privileges</h2>
      <p>
        VDR implements a role-based access control (RBAC) system. User
        privileges are defined in <code>sys_privileges</code> and assigned to
        roles in <code>sys_roles</code>. The application supports:
      </p>
      <ul>
        <li>
          Per-module read / write / create / delete / approve / post
          permissions
        </li>
        <li>
          Approval workflows for transactions (e.g., purchase order approval,
          sales approval)
        </li>
        <li>
          Posting workflows (journal entries must be posted before they are
          final)
        </li>
      </ul>

      <h2>Lookup Lists (Enums)</h2>
      <p>
        The <code>sys_lookup_lists</code> section defines dropdown options and
        status codes used throughout the application:
      </p>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Values</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Transaction Status</td>
            <td>AWL (Awaiting List), Picking, Loading, Done</td>
          </tr>
          <tr>
            <td>Currencies</td>
            <td>Rp (Rupiah), Yuan, USD</td>
          </tr>
          <tr>
            <td>Report Types</td>
            <td>Rugi Laba, Neraca, Laba Rugi, Neraca Percobaan</td>
          </tr>
          <tr>
            <td>Branch Types</td>
            <td>Grosir (Wholesale), Retail, Cabang (Branch)</td>
          </tr>
          <tr>
            <td>Stock Conditions</td>
            <td>Semua (All), Bagus (Good), Rusak (Damaged)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}