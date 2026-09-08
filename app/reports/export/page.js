export default function ReportExportPage() {
  return (
    <div>
      <h1>Report Exports</h1>
      <p>
        VDR supports multiple report export formats, configured through the
        <code>default-param</code> template and the underlying Jam.py report
        engine.
      </p>

      <h2>Supported Formats</h2>
      <table>
        <thead>
          <tr>
            <th>Format</th>
            <th>Extension</th>
            <th>Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>PDF</strong></td>
            <td><code>.pdf</code></td>
            <td>Archival, printing, emailing to customers</td>
          </tr>
          <tr>
            <td><strong>ODS</strong></td>
            <td><code>.ods</code></td>
            <td>Editable spreadsheet — continues editing in LibreOffice</td>
          </tr>
          <tr>
            <td><strong>XLS</strong></td>
            <td><code>.xls</code></td>
            <td>Legacy Microsoft Excel compatibility</td>
          </tr>
          <tr>
            <td><strong>HTML</strong></td>
            <td><code>.html</code></td>
            <td>Web preview, embedding in dashboards</td>
          </tr>
        </tbody>
      </table>

      <h2>The Export Dialog</h2>
      <p>
        When a user clicks the <em>Reports</em> button on any view, a dropdown
        lists the available reports for that module. Selecting a report opens
        the <code>default-param</code> dialog, which includes:
      </p>
      <ul>
        <li>Report parameter fields (date ranges, filters)</li>
        <li>
          <strong>Format selector</strong> — a dropdown to choose the output
          extension (PDF, ODS, XLS, HTML)
        </li>
        <li>
          <strong>Print</strong> button — generates and renders/prints the
          report
        </li>
        <li>
          <strong>Close</strong> button — dismisses the dialog
        </li>
      </ul>

      <h2>XLSX Export</h2>
      <p>
        In addition to the ODS-based report engine, many dashboard and analysis
        views offer direct <strong>XLSX</strong> export:
      </p>
      <ul>
        <li>
          The <code>analisa_penjualan</code> view has an{" "}
          <code>xlsx</code> button for downloading sales analysis tables
        </li>
        <li>
          The <code>xlsx_sheet-view</code> provides inline spreadsheet-like
          viewing
        </li>
        <li>
          The <code>tableExport.js</code> library converts HTML tables to
          spreadsheet files
        </li>
        <li>
          SheetJS (<code>xlsx.full.min.js</code>) powers workbook generation
        </li>
      </ul>

      <h2>Template-based XLSX Download</h2>
      <p>
        The <code>dashboard_template-view</code> provides a sidebar of
        one-click template downloads:
      </p>
      <table>
        <thead>
          <tr>
            <th>Template</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stock Fisik</td>
            <td>Pre-formatted physical stock count spreadsheet</td>
          </tr>
          <tr>
            <td>Jual &amp; Retur + Cust</td>
            <td>Sales & returns with customer details</td>
          </tr>
          <tr>
            <td>Pembelian</td>
            <td>Purchase transactions</td>
          </tr>
          <tr>
            <td>Retur Beli</td>
            <td>Purchase returns</td>
          </tr>
          <tr>
            <td>Mutasi Gudang</td>
            <td>Warehouse transfers</td>
          </tr>
          <tr>
            <td>Mutasi Purchase Order</td>
            <td>PO transfers</td>
          </tr>
          <tr>
            <td>Penjualan + HPP</td>
            <td>Sales with cost of goods sold</td>
          </tr>
          <tr>
            <td>Retur + HPP</td>
            <td>Returns with COGS</td>
          </tr>
          <tr>
            <td>Jual Retur + tgl byr</td>
            <td>Sales and returns with payment dates</td>
          </tr>
          <tr>
            <td>Stock Fisik HPP</td>
            <td>Physical stock count with COGS</td>
          </tr>
          <tr>
            <td>Master Stock</td>
            <td>Stock master data export</td>
          </tr>
          <tr>
            <td>Master Customer</td>
            <td>Customer master data export</td>
          </tr>
        </tbody>
      </table>

      <h2>Pivot Table Export</h2>
      <p>
        The pivot table view (<code>pivot_table</code>) includes a{" "}
        <em>Download</em> button (<code>export_pivot</code>) that exports the
        current pivot configuration and data to a spreadsheet file.
      </p>

      <h2>GL Ledger Export</h2>
      <p>
        In the finance dashboard, users can export the general ledger to XLSX
        or PDF via the <em>Kartu Ledger</em> options:
      </p>
      <ul>
        <li><code>ledger1</code> — Kartu ledger to XLSX</li>
        <li><code>ledger2</code> — Kartu ledger to PDF</li>
      </ul>
    </div>
  );
}