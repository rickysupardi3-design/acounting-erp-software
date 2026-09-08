import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>VDR ERP System Overview</h1>

      <p>
        VDR is a comprehensive ERP (Enterprise Resource Planning) system built
        on the{" "}
        <a href="https://jampyapplicationbuilder.com/" target="_blank" rel="noopener noreferrer">
          Jam.py
        </a>{" "}
        low-code application framework. The application is a full-featured
        business management suite covering sales, purchasing, inventory,
        accounting, and financial reporting.
      </p>

      <h2>Purpose</h2>
      <p>
        VDR provides end-to-end business process automation for Indonesian
        wholesale and retail operations. It manages the entire transaction
        lifecycle — from order creation and delivery through to invoicing,
        payments, and financial reporting.
      </p>

      <h2>Key Capabilities</h2>
      <ul>
        <li>
          <strong>Sales Management</strong> — Sales orders, invoices (Faktur
          Jual), delivery notes (Surat Jalan), returns (Retur Jual), and
          commission processing.
        </li>
        <li>
          <strong>Purchasing</strong> — Purchase orders, goods receipts,
          supplier invoices (Faktur Beli), and purchase returns (Retur Beli).
        </li>
        <li>
          <strong>Inventory</strong> — Stock tracking, multi-warehouse
          management (gudang), stock transfers, physical stock counts, and
          stock cards (Kartu Stok).
        </li>
        <li>
          <strong>Finance & Accounting</strong> — General ledger, chart of
          accounts (COA/Glmas), accounts payable, accounts receivable, bank
          transfers, commissions, and trial balance.
        </li>
        <li>
          <strong>Reporting</strong> — 57+ report templates supporting PDF,
          XLSX, ODS, and HTML export formats, including income statements
          (Rugi Laba), balance sheets (Neraca), AR/AP aging, and more.
        </li>
        <li>
          <strong>Dashboards</strong> — Real-time KPI cards, revenue trends,
          best-selling category analytics, and role-based operational views.
        </li>
      </ul>

      <h2>Technical Stack</h2>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Technology</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Application Framework</td>
            <td>Jam.py Application Builder (v5.4.136)</td>
          </tr>
          <tr>
            <td>Frontend</td>
            <td>jQuery, Bootstrap 2 (Cerulean theme), Chart.js, Plotly.js</td>
          </tr>
          <tr>
            <td>Rich Text Editor</td>
            <td>TinyMCE 5.x</td>
          </tr>
          <tr>
            <td>Report Templates</td>
            <td>LibreOffice ODS files (57 templates)</td>
          </tr>
          <tr>
            <td>Data Formats</td>
            <td>JSON (task.dat), XLSX via SheetJS</td>
          </tr>
          <tr>
            <td>Data Tables</td>
            <td>DataTables with row selection</td>
          </tr>
        </tbody>
      </table>

      <h2>Architecture at a Glance</h2>
      <pre><code>VDR ERP Application
├── Catalogs (Master Data)
│   ├── Customers (Cust)
│   ├── Stock Items
│   ├── Suppliers (Supl)
│   ├── Salespersons
│   ├── Warehouses (Gudang)
│   ├── Users & Roles
│   └── Chart of Accounts (Glmas)
├── Journals (Transactions)
│   ├── Sales & Order Processing
│   ├── Purchasing
│   ├── Inventory Movements
│   ├── GL Journals
│   ├── Bank Transfers
│   └── Cash Receipts (TRM)
├── Reports
│   ├── Sales Reports
│   ├── Purchase Reports
│   ├── Inventory Reports
│   └── Accounting Reports
└── Dashboards
    ├── Sales Dashboard
    ├── Inventory Dashboard
    └── Finance Dashboard</code></pre>

      <h2>Getting Started</h2>
      <p>To begin exploring the documentation, visit the following sections:</p>
      <ul>
        <li>
          <Link href="/getting-started/architecture">System Architecture</Link> — Understand the application structure
        </li>
        <li>
          <Link href="/getting-started/installation">Installation Guide</Link> — Set up VDR on your infrastructure
        </li>
        <li>
          <Link href="/modules/catalogs">Catalogs Module</Link> — Explore the master data structures
        </li>
        <li>
          <Link href="/deployment/vercel">Vercel Deployment</Link> — Deploy the documentation and application to Vercel
        </li>
      </ul>
    </div>
  );
}