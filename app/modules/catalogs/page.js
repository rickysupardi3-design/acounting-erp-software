export default function CatalogsPage() {
  return (
    <div>
      <h1>Catalogs — Master Data</h1>
      <p>
        The <code>catalogs</code> module contains all master data definitions.
        Each catalog defines a database table with its fields, UI forms, and
        relationships.
      </p>

      <h2>Catalog Items</h2>
      <table>
        <thead>
          <tr>
            <th>Catalog ID</th>
            <th>Indonesian Name</th>
            <th>English Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>cust</code></td>
            <td>Customer</td>
            <td>Customers</td>
            <td>
              Customer master records — name, address, contact, payment terms,
              credit limits, branch assignments
            </td>
          </tr>
          <tr>
            <td><code>stock</code></td>
            <td>Master Stock</td>
            <td>Stock Items</td>
            <td>
              Product/item definitions — SKU, description, category, unit of
              measure, pricing, barcode, current stock levels
            </td>
          </tr>
          <tr>
            <td><code>supl</code></td>
            <td>Supplier</td>
            <td>Suppliers</td>
            <td>
              Supplier/vendor master data — company name, address, payment
              terms, bank details
            </td>
          </tr>
          <tr>
            <td><code>sales</code></td>
            <td>Salesman</td>
            <td>Salespersons</td>
            <td>
              Sales staff records — name, target, assigned territories
            </td>
          </tr>
          <tr>
            <td><code>gudang</code></td>
            <td>Gudang</td>
            <td>Warehouses</td>
            <td>Warehouse/location definitions for stock management</td>
          </tr>
          <tr>
            <td><code>glmas</code></td>
            <td>Master GL / COA</td>
            <td>Chart of Accounts</td>
            <td>
              General ledger chart of accounts — account number, name, type
              (asset/liability/equity/revenue/expense)
            </td>
          </tr>
          <tr>
            <td><code>cate</code></td>
            <td>Kategori</td>
            <td>Categories</td>
            <td>
              Product categories — used in dashboards and pivot analysis
            </td>
          </tr>
          <tr>
            <td><code>users</code></td>
            <td>Pengguna</td>
            <td>Users</td>
            <td>
              System users — login credentials, role assignments, active status
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Additional Catalog Items</h2>
      <table>
        <thead>
          <tr>
            <th>Catalog</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>gl_jurnal</code></td>
            <td>GL Journal entries — individual debit/credit records linked to GL journal headers</td>
          </tr>
          <tr>
            <td><code>k_stock</code></td>
            <td>Stock card (Kartu Stock) — running log of all stock movements per item</td>
          </tr>
          <tr>
            <td><code>artact</code></td>
            <td>Accounts receivable transactions — detailed AR records</td>
          </tr>
          <tr>
            <td><code>aptact</code></td>
            <td>Accounts payable transactions — detailed AP records</td>
          </tr>
          <tr>
            <td><code>pers</code></td>
            <td>Personnel / staff records</td>
          </tr>
        </tbody>
      </table>

      <h2>UI Templates</h2>
      <p>
        Each catalog uses one of these standard view templates defined in
        <code>index.html</code>:
      </p>
      <table>
        <thead>
          <tr>
            <th>Template</th>
            <th>Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>default-view</code></td>
            <td>
              Standard list view with bottom toolbar (New, Edit, Delete,
              Reports)
            </td>
          </tr>
          <tr>
            <td><code>defaulft-top-view</code></td>
            <td>
              List view with top toolbar — used when actions should appear
              above the table
            </td>
          </tr>
          <tr>
            <td><code>default-edit</code></td>
            <td>
              Standard edit form with OK/Cancel footer buttons
            </td>
          </tr>
          <tr>
            <td><code>default-top-edit</code></td>
            <td>
              Edit form with top header buttons
            </td>
          </tr>
          <tr>
            <td><code>info-edit</code></td>
            <td>
              Edit form with a long_text textarea for extended notes
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Barcode Support</h2>
      <p>
        The <code>stock</code> catalog supports barcode generation. The
        application includes a QR code reader (via
        <code>html5-qrcode.min.js</code> in <code>static/js/</code>) that can
        scan and identify stock items.
      </p>

      <h2>Privileges</h2>
      <p>
        Each catalog enforces role-based access control. Users can have read,
        write, create, or delete permissions per catalog. The access rules are
        defined in <code>sys_privileges</code> within <code>task.dat</code>.
      </p>
    </div>
  );
}