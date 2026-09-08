export default function JournalsPage() {
  return (
    <div>
      <h1>Journals — Transactions</h1>
      <p>
        The <code>journals</code> module handles all business transactions.
        Each journal is a header/detail (master/detail) structure where
        headers contain summary information and details hold line items.
      </p>

      <h2>Sales &amp; Delivery</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Transaction</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>so_hd</code></td>
            <td>Sales Order</td>
            <td>
              Pre-delivery orders — customer, items, quantities, target
              delivery date. Status: AWL → Picking → Loading → Done
            </td>
          </tr>
          <tr>
            <td><code>fjt_hd</code></td>
            <td>Faktur Jual (Sales Invoice)</td>
            <td>
              Invoice generated from a sales delivery. Includes line items,
              tax, total amount. Report template: <code>fjt_hd.ods</code>
            </td>
          </tr>
          <tr>
            <td><code>sj_hd</code></td>
            <td>Surat Jalan (Delivery Note)</td>
            <td>
              Delivery document for goods shipped. Report template:{" "}
              <code>sj_hd.ods</code>
            </td>
          </tr>
          <tr>
            <td><code>rj_hd</code></td>
            <td>Retur Jual (Sales Return)</td>
            <td>
              Customer returns — links back to original invoice. Report:{" "}
              <code>rj_hd.ods</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Purchasing</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Transaction</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>po_hd</code></td>
            <td>Purchase Order</td>
            <td>
              Purchase requisitions to suppliers — items, quantities, pricing.
              Report template: <code>po_hd.ods</code> (34.7 KB, largest report)
            </td>
          </tr>
          <tr>
            <td><code>bp_hd</code></td>
            <td>Beli Terima (Goods Receipt)</td>
            <td>
              Confirms receipt of purchased goods into inventory. Report:{" "}
              <code>bp_hd.ods</code>
            </td>
          </tr>
          <tr>
            <td><code>fbt_hd</code></td>
            <td>Faktur Beli (Purchase Invoice)</td>
            <td>
              Invoice from supplier. Report template: <code>fbt_hd.ods</code>
            </td>
          </tr>
          <tr>
            <td><code>rb_hd</code></td>
            <td>Retur Beli (Purchase Return)</td>
            <td>
              Returns to supplier. Report template: <code>rb_hd.ods</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Inventory Movements</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Transaction</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>gr_hd</code></td>
            <td>Goods Receipt</td>
            <td>General goods receipt (non-purchase). Report: <code>gr_hd.ods</code></td>
          </tr>
          <tr>
            <td><code>do_hd</code></td>
            <td>Delivery Order</td>
            <td>
              General delivery order (non-sales). Report: <code>do_hd.ods</code>{" "}
              (36.4 KB, second largest)
            </td>
          </tr>
          <tr>
            <td><code>m_kirim</code></td>
            <td>Mutasi Kirim (Transfer Shipment)</td>
            <td>
              Warehouse-to-warehouse stock transfers. Report:{" "}
              <code>m_kirim.ods</code>
            </td>
          </tr>
          <tr>
            <td><code>trf_data</code></td>
            <td>Transfer Gudang</td>
            <td>General warehouse transfer records</td>
          </tr>
        </tbody>
      </table>

      <h2>Financial Journals</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Transaction</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>gltrhd</code></td>
            <td>GL Journal Header</td>
            <td>
              General ledger journal entries — links to <code>gl_jurnal</code>{" "}
              detail records. Supports posting and approval workflows
            </td>
          </tr>
          <tr>
            <td><code>tr_bank</code></td>
            <td>Bank Transfer</td>
            <td>
              Bank-to-bank transfers and inter-account movements
            </td>
          </tr>
          <tr>
            <td><code>trm_hd</code></td>
            <td>Cash Receipts (Penerimaan Umum)</td>
            <td>General cash receipts and incoming payments</td>
          </tr>
        </tbody>
      </table>

      <h2>Transaction Workflow</h2>
      <p>
        Most transactions follow this workflow:
      </p>
      <ol>
        <li><strong>Create</strong> — Record is created in draft state</li>
        <li><strong>Edit</strong> — Modify before submission</li>
        <li><strong>Post</strong> — Records are posted (committed to ledger)</li>
        <li><strong>Approve</strong> — Final approval (required for some journals)</li>
      </ol>
      <p>
        The action buttons in <code>g.js</code> implement:{" "}
        <code>Post</code>, <code>Unpost</code>, <code>Approve</code>, and{" "}
        <code>Unapprove</code> handlers with confirmation dialogs and
        status validation.
      </p>

      <h2>Unposting &amp; Reversals</h2>
      <p>
        The application supports unposting — reversing a previously posted
        transaction. This creates reversal entries in the general ledger. The
        logic in <code>g.js</code> handles:
      </p>
      <ul>
        <li>Posting approval checks (role-based)</li>
        <li>Status validation (cannot unpost approved items without unapproving first)</li>
        <li>Automatic GL reversal entry creation</li>
      </ul>
    </div>
  );
}