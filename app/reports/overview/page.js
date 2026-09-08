export default function ReportOverviewPage() {
  return (
    <div>
      <h1>Reports Overview</h1>
      <p>
        VDR includes 57+ report templates, all stored as LibreOffice
        OpenDocument Spreadsheet (<code>.ods</code>) files in the{" "}
        <code>reports/</code> directory. These are used as the basis for
        compliant, printable business reports.
      </p>

      <h2>Report Categories</h2>

      <h3>Sales Reports</h3>
      <table>
        <thead>
          <tr>
            <th>Template</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>fjt_hd.ods</code></td>
            <td>Faktur Jual — sales invoice</td>
          </tr>
          <tr>
            <td><code>rj_hd.ods</code></td>
            <td>Retur Jual — sales return</td>
          </tr>
          <tr>
            <td><code>sj_hd.ods</code></td>
            <td>Surat Jalan — delivery note</td>
          </tr>
          <tr>
            <td><code>so_hd.ods</code></td>
            <td>Sales order</td>
          </tr>
          <tr>
            <td><code>list_jual.ods</code> / <code>List_jual2.ods</code></td>
            <td>Sales lists</td>
          </tr>
          <tr>
            <td><code>jual_retur.ods</code></td>
            <td>Combined sales & returns</td>
          </tr>
          <tr>
            <td><code>omset_sales.ods</code></td>
            <td>Sales turnover per salesperson</td>
          </tr>
          <tr>
            <td><code>omset_sales_item.ods</code></td>
            <td>Sales turnover per item</td>
          </tr>
          <tr>
            <td><code>omset_sales_total.ods</code></td>
            <td>Total sales turnover summary</td>
          </tr>
          <tr>
            <td><code>omset_item.ods</code></td>
            <td>Item-level turnover</td>
          </tr>
          <tr>
            <td><code>omzet_per_cust.ods</code></td>
            <td>Turnover per customer</td>
          </tr>
          <tr>
            <td><code>omzet_per_cust_sum.ods</code></td>
            <td>Turnover per customer (summary)</td>
          </tr>
          <tr>
            <td><code>analisa_omset_kelompok.ods</code></td>
            <td>Turnover by category group</td>
          </tr>
          <tr>
            <td><code>retur_per_cust.ods</code></td>
            <td>Returns per customer</td>
          </tr>
        </tbody>
      </table>

      <h3>Purchase Reports</h3>
      <table>
        <thead>
          <tr>
            <th>Template</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>po_hd.ods</code></td>
            <td>Purchase order</td>
          </tr>
          <tr>
            <td><code>fbt_hd.ods</code></td>
            <td>Faktur Beli — purchase invoice</td>
          </tr>
          <tr>
            <td><code>bp_hd.ods</code></td>
            <td>Beli/Pembelian — purchase receipt</td>
          </tr>
          <tr>
            <td><code>rb_hd.ods</code></td>
            <td>Retur Beli — purchase return</td>
          </tr>
          <tr>
            <td><code>pembelian_per_sup.ods</code></td>
            <td>Purchases per supplier</td>
          </tr>
          <tr>
            <td><code>analisa_beli.ods</code></td>
            <td>Purchase analysis</td>
          </tr>
          <tr>
            <td><code>analisa_beli_kelompok.ods</code></td>
            <td>Purchase analysis by group</td>
          </tr>
          <tr>
            <td><code>retur_beli_supplier.ods</code></td>
            <td>Purchase returns per supplier</td>
          </tr>
        </tbody>
      </table>

      <h3>Inventory Reports</h3>
      <table>
        <thead>
          <tr>
            <th>Template</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>gr_hd.ods</code></td>
            <td>Goods receipt</td>
          </tr>
          <tr>
            <td><code>do_hd.ods</code></td>
            <td>Delivery order</td>
          </tr>
          <tr>
            <td><code>m_kirim.ods</code></td>
            <td>Mutasi Kirim — transfer shipment</td>
          </tr>
          <tr>
            <td><code>tkb.ods</code></td>
            <td>Tanda Keluar Barang — goods issue slip</td>
          </tr>
          <tr>
            <td><code>stock_fisik.ods</code></td>
            <td>Physical stock count</td>
          </tr>
          <tr>
            <td><code>stock_fisik_hpp.ods</code></td>
            <td>Physical stock with COGS valuation</td>
          </tr>
          <tr>
            <td><code>stock_hpp.ods</code></td>
            <td>Stock with COGS valuation</td>
          </tr>
          <tr>
            <td><code>kartu_stock.ods</code></td>
            <td>Stock card</td>
          </tr>
        </tbody>
      </table>

      <h3>Accounting Reports</h3>
      <table>
        <thead>
          <tr>
            <th>Template</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>jurnal_umum.ods</code> / <code>jurnal2.ods</code></td>
            <td>General journal</td>
          </tr>
          <tr>
            <td><code>neraca.ods</code> / <code>neraca2.ods</code></td>
            <td>Balance sheet</td>
          </tr>
          <tr>
            <td><code>neraca_percobaan.ods</code></td>
            <td>Trial balance</td>
          </tr>
          <tr>
            <td><code>rugi_laba.ods</code></td>
            <td>Income statement (Rugi Laba)</td>
          </tr>
          <tr>
            <td><code>labarugi2.ods</code></td>
            <td>Income statement (variant)</td>
          </tr>
          <tr>
            <td><code>ini_labarugi.ods</code> / <code>ini_neraca.ods</code></td>
            <td>Alternative statements</td>
          </tr>
          <tr>
            <td><code>kartu_jurnal.ods</code></td>
            <td>Journal card</td>
          </tr>
          <tr>
            <td><code>kartu_piutang.ods</code></td>
            <td>Accounts receivable card</td>
          </tr>
          <tr>
            <td><code>kartu_hutang.ods</code></td>
            <td>Accounts payable card</td>
          </tr>
          <tr>
            <td><code>penerimaan_umum.ods</code></td>
            <td>Cash receipts</td>
          </tr>
          <tr>
            <td><code>umur_piutang.ods</code></td>
            <td>AR aging</td>
          </tr>
          <tr>
            <td><code>umur_hutang.ods</code></td>
            <td>AP aging</td>
          </tr>
          <tr>
            <td><code>sld_awl.ods</code></td>
            <td>Opening balances</td>
          </tr>
          <tr>
            <td><code>adj.ods</code></td>
            <td>Adjustments</td>
          </tr>
          <tr>
            <td><code>bh_hd.ods</code></td>
            <td>Bayar Hutang — debt payment</td>
          </tr>
        </tbody>
      </table>

      <h3>Other Reports</h3>
      <ul>
        <li><code>customers.ods</code> — Customer list</li>
        <li><code>report_schedule.ods</code> — Report delivery schedules</li>
      </ul>

      <h2>Report Templates</h2>
      <p>
        Reports use LibreOffice Calc as the template engine; <code>.ods</code>{" "}
        files can be edited in LibreOffice, OpenOffice, or any compatible
        spreadsheet application. The engine substitutes placeholders with
        database values at generation time.
      </p>
    </div>
  );
}