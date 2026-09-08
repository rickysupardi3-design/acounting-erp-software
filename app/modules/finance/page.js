export default function FinancePage() {
  return (
    <div>
      <h1>Finance &amp; General Ledger</h1>
      <p>
        VDR includes a full double-entry accounting system with chart of
        accounts, journal posting, trial balance, income statements, balance
        sheets, and accounts receivable/payable management.
      </p>

      <h2>Chart of Accounts (COA)</h2>
      <p>
        The chart of accounts is managed via the <code>glmas</code> catalog in
        the master data section. Each account has:
      </p>
      <ul>
        <li>Account number and name</li>
        <li>Account type (Asset, Liability, Equity, Revenue, Expense)</li>
        <li>Opening balance support</li>
        <li>Parent/child hierarchy (for sub-accounts)</li>
      </ul>

      <h2>Journal Entries</h2>
      <p>
        All financial transactions flow through the general ledger via{" "}
        <code>gltrhd</code> (GL Journal Header) linked to <code>gl_jurnal</code>{" "}
        (GL Journal Detail). Each journal entry must balance — total debits
        must equal total credits.
      </p>

      <h2>Accounts Receivable (Piutang)</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>AR Transactions</strong></td>
            <td>
              Tracked in the <code>artact</code> catalog — one record per
              invoice line item
            </td>
          </tr>
          <tr>
            <td><strong>AR Payments</strong></td>
            <td>
              Customer payments reduce AR balances. Processed via the{" "}
              <em>Bayar Piutang</em> view
            </td>
          </tr>
          <tr>
            <td><strong>AR Aging</strong></td>
            <td>
              Report: <code>umur_piutang.ods</code> and{" "}
              <code>umur_piutang_detail.ods</code> — shows outstanding
              amounts by age bucket
            </td>
          </tr>
          <tr>
            <td><strong>AR Card</strong></td>
            <td>
              Report: <code>kartu_piutang.ods</code> — running ledger for a
              customer account
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Accounts Payable (Hutang)</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>AP Transactions</strong></td>
            <td>
              Tracked in the <code>aptact</code> catalog
            </td>
          </tr>
          <tr>
            <td><strong>AP Payments</strong></td>
            <td>
              Supplier payments. Processed via <em>Bayar Hutang</em> view.
              Report: <code>bh_hd.ods</code>
            </td>
          </tr>
          <tr>
            <td><strong>AP Aging</strong></td>
            <td>
              Report: <code>umur_hutang.ods</code> — shows outstanding
              supplier amounts by age
            </td>
          </tr>
          <tr>
            <td><strong>AP Card</strong></td>
            <td>
              Report: <code>kartu_hutang.ods</code> — running ledger for a
              supplier account
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Financial Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Report</th>
            <th>Indonesian Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>rugi_laba.ods</code></td>
            <td>Rugi Laba</td>
            <td>Income statement — revenue vs. expenses for a period</td>
          </tr>
          <tr>
            <td><code>neraca.ods</code></td>
            <td>Neraca</td>
            <td>Balance sheet — assets = liabilities + equity</td>
          </tr>
          <tr>
            <td><code>neraca_percobaan.ods</code></td>
            <td>Neraca Percobaan</td>
            <td>Trial balance — all accounts with their balances</td>
          </tr>
          <tr>
            <td><code>jurnal_umum.ods</code></td>
            <td>Jurnal Umum</td>
            <td>General journal listing — all journal entries in date order</td>
          </tr>
          <tr>
            <td><code>kartu_jurnal.ods</code></td>
            <td>Kartu Jurnal</td>
            <td>Journal card — detailed view of a specific account</td>
          </tr>
        </tbody>
      </table>

      <h2>Cash &amp; Bank</h2>
      <ul>
        <li>
          <strong>Bank Transfers</strong> — <code>tr_bank</code> journal records
          all inter-bank movements. Report: <code>transfer_bank</code>
        </li>
        <li>
          <strong>Cash Receipts</strong> — <code>trm_hd</code> records all
          incoming cash payments. Reports: <code>penerimaan_umum.ods</code>,{" "}
          <code>penerimaan_umum2.ods</code>
        </li>
        <li>
          <strong>Cash Disbursements</strong> — General outgoing payments.
          Report: <code>pengeluaran_umum.ods</code>
        </li>
      </ul>

      <h2>Finance Dashboard</h2>
      <p>
        The <code>dashboard_finance-view</code> provides a consolidated view of:
      </p>
      <ul>
        <li>Piutang Dagang (Accounts Receivable) summary</li>
        <li>Hutang Dagang (Accounts Payable) summary</li>
        <li>Kas &amp; Bank (Cash &amp; Bank) balances</li>
        <li>GL Balance — chart of account balances with visualization</li>
        <li>GL Trans — recent general ledger transactions</li>
      </ul>

      <h2>Commission Processing</h2>
      <p>
        The <em>Process Komisi</em> view handles salesperson commission
        calculations based on sales volume. Commission rates and rules are
        configured in the application parameters.
      </p>

      <h2>Other Financial Views</h2>
      <table>
        <thead>
          <tr>
            <th>View</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>sld_awl.ods</code></td>
            <td>Opening balances — initial GL balances for a new period</td>
          </tr>
          <tr>
            <td><code>adj.ods</code></td>
            <td>Journal adjustments — period-end adjusting entries</td>
          </tr>
          <tr>
            <td><code>hnd.ods</code></td>
            <td>Hutang notes — promissory notes payable</td>
          </tr>
          <tr>
            <td><code>pnd.ods</code></td>
            <td>Piutang notes — promissory notes receivable</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}