export default function DashboardsPage() {
  return (
    <div>
      <h1>Dashboards &amp; Analytics</h1>
      <p>
        VDR provides several role-specific dashboards for at-a-glance business
        insight, featuring both Chart.js and Plotly.js visualizations.
      </p>

      <h2>Home Page Dashboard</h2>
      <p>
        The <code>home_page-view</code> is the primary landing dashboard
        featuring:
      </p>

      <h3>KPI Cards</h3>
      <table>
        <thead>
          <tr>
            <th>Card</th>
            <th>Color</th>
            <th>Metric</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Order Sales ↗</td>
            <td>Blue (#0275d8)</td>
            <td>Total sales orders — clickable, navigates to sales module</td>
          </tr>
          <tr>
            <td>Jual Special ↗</td>
            <td>Green (#5cb85c)</td>
            <td>Special sales — clickable, navigates to special sales</td>
          </tr>
          <tr>
            <td>Informasi 1</td>
            <td>Orange (#f0ad4e)</td>
            <td>General KPI key figure 1</td>
          </tr>
          <tr>
            <td>Informasi 2</td>
            <td>Red (#d9534f)</td>
            <td>General KPI key figure 2 (shown as percentage)</td>
          </tr>
          <tr>
            <td>Informasi 3</td>
            <td>Purple (#6f42c1)</td>
            <td>Stock-level KPI (shown as item count)</td>
          </tr>
        </tbody>
      </table>

      <h3>Charts</h3>
      <ul>
        <li>
          <strong>Tren Pendapatan Bulanan</strong> — Monthly revenue trend
          line chart (Chart.js)
        </li>
        <li>
          <strong>Kategori Terlaris</strong> — Best-selling category donut
          chart (Chart.js)
        </li>
      </ul>

      <h2>Sales Dashboard</h2>
      <p>
        The <code>dashboard_sales-view</code> provides a comprehensive view of
        sales performance:
      </p>
      <ul>
        <li>
          <strong>Sales Info</strong> — Overview of current sales figures
        </li>
        <li>
          <strong>Sales Omzet</strong> — Sales turnover breakdown
        </li>
        <li>
          <strong>Customer Table</strong> — Customer sales summary
        </li>
        <li>
          <strong>Orders Table</strong> — Order status and progress
        </li>
        <li>
          <strong>Customer Detail</strong> — Detailed per-customer analysis
        </li>
        <li>
          <strong>Stock Table</strong> — Current stock position
        </li>
      </ul>

      <h2>Analysis Views</h2>
      <h3>Analisa Penjualan (Sales Analysis)</h3>
      <p>
        The <code>analisa_penjualan-view</code> provides:
      </p>
      <ul>
        <li>Sales chart (canvas-based)</li>
        <li>Brand-level sales breakdown</li>
        <li>Divisi (division) sales breakdown</li>
        <li>Kelompok (group/category) sales breakdown</li>
        <li>One-click XLSX export of all analysis tables</li>
      </ul>

      <h2>Inventory Dashboard</h2>
      <p>
        The <code>dashboard_inventory-view</code> shows:
      </p>
      <ul>
        <li>Current stock levels per item</li>
        <li>Outstanding purchase orders</li>
        <li>Outstanding sales orders</li>
        <li>Warehouse transfer balance</li>
      </ul>

      <h2>Finance Dashboard</h2>
      <p>
        The <code>dashboard_finance-view</code> displays:
      </p>
      <ul>
        <li>Accounts receivable and payable summaries</li>
        <li>Cash &amp; bank balances</li>
        <li>GL balance visualization</li>
        <li>Recent GL transactions</li>
      </ul>

      <h2>Pivot Table Analysis</h2>
      <p>
        The <code>pivot_table-view</code> enables interactive data exploration:
      </p>
      <ul>
        <li>
          Drag-and-drop pivot table builder (PivotTable.js with Plotly
          renderers)
        </li>
        <li>Custom row, column, and value aggregations</li>
        <li>
          Export functionality (<code>export_pivot</code> button) to download
          the resulting pivot data
        </li>
      </ul>

      <h2>Reporting in Dashboards</h2>
      <p>
        Most dashboard views include a <em>Reports</em> dropdown (via the
        toolbar) that lets users generate formatted reports on the fly. The
        available reports depend on the module being viewed and are defined
        by the ODS templates in the <code>reports/</code> directory.
      </p>
    </div>
  );
}