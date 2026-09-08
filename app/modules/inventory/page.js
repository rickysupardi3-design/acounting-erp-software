export default function InventoryPage() {
  return (
    <div>
      <h1>Inventory Module</h1>
      <p>
        The inventory module tracks all stock movements across warehouses and
        provides real-time visibility into stock levels, locations, and
        conditions.
      </p>

      <h2>Core Concepts</h2>
      <table>
        <thead>
          <tr>
            <th>Concept</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Stock Items</strong></td>
            <td>
              Master stock records defined in the <code>stock</code> catalog.
              Each item has SKU, description, category, unit price, and
              barcode.
            </td>
          </tr>
          <tr>
            <td><strong>Warehouses (Gudang)</strong></td>
            <td>
              Physical storage locations. Multiple warehouses supported
              via the <code>gudang</code> catalog.
            </td>
          </tr>
          <tr>
            <td><strong>Stock Card (Kartu Stok)</strong></td>
            <td>
              Running log of all stock movements per item — defined in the{" "}
              <code>k_stock</code> catalog. Shows opening balance, in, out,
              and closing balance.
            </td>
          </tr>
          <tr>
            <td><strong>Stock Conditions</strong></td>
            <td>
              Items can be tracked by condition: <em>Semua</em> (All),{" "}
              <em>Bagus</em> (Good), <em>Rusak</em> (Damaged).
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Stock Movement Types</h2>
      <table>
        <thead>
          <tr>
            <th>Movement</th>
            <th>Source</th>
            <th>Effect on Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Goods Receipt</td>
            <td>Purchase order / purchase receipt</td>
            <td>Increases stock</td>
          </tr>
          <tr>
            <td>Sales Delivery</td>
            <td>Sales order / Faktur Jual</td>
            <td>Decreases stock</td>
          </tr>
          <tr>
            <td>Purchase Return</td>
            <td>Retur Beli</td>
            <td>Decreases stock</td>
          </tr>
          <tr>
            <td>Sales Return</td>
            <td>Retur Jual</td>
            <td>Increases stock</td>
          </tr>
          <tr>
            <td>Warehouse Transfer</td>
            <td>Mutasi Gudang</td>
            <td>Decreases source, increases destination</td>
          </tr>
          <tr>
            <td>Physical Stock Count</td>
            <td>Stock opname / physical count</td>
            <td>Adjusts to actual count</td>
          </tr>
        </tbody>
      </table>

      <h2>Dashboard Views</h2>
      <p>
        The inventory dashboard (<code>dashboard_inventory-view</code>) provides:
      </p>
      <ul>
        <li>Sidebar menu for quick navigation to all inventory operations</li>
        <li>
          Stock table with current levels per item, per warehouse
        </li>
        <li>
          Outstanding orders view — items pending delivery or receipt
        </li>
        <li>
          Transfer history — log of all warehouse-to-warehouse movements
        </li>
      </ul>

      <h2>Templates to XLSX</h2>
      <p>
        The <code>dashboard_template-view</code> provides one-click export
        templates:
      </p>
      <table>
        <thead>
          <tr>
            <th>Template</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stock Fisik</td>
            <td>Physical stock count with expected vs. actual</td>
          </tr>
          <tr>
            <td>Stock Fisik HPP</td>
            <td>Physical stock count with COGS (HPP) valuation</td>
          </tr>
          <tr>
            <td>Mutasi Gudang</td>
            <td>Warehouse transfer records</td>
          </tr>
          <tr>
            <td>Mutasi Purchase Order</td>
            <td>Purchase order transfer movements</td>
          </tr>
          <tr>
            <td>Master Stock</td>
            <td>Complete stock item listing</td>
          </tr>
          <tr>
            <td>Master Customer</td>
            <td>Complete customer listing</td>
          </tr>
        </tbody>
      </table>

      <h2>Stock Card (Kartu Stok)</h2>
      <p>
        The <code>kartu_stk-view</code> displays the stock card for a selected
        item. It shows a chronological log of all movements:
      </p>
      <table>
        <thead>
          <tr>
            <th>Column</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Date</td>
            <td>Transaction date</td>
          </tr>
          <tr>
            <td>Reference</td>
            <td>Source document (invoice, PO, transfer)</td>
          </tr>
          <tr>
            <td>In</td>
            <td>Quantity received</td>
          </tr>
          <tr>
            <td>Out</td>
            <td>Quantity dispatched</td>
          </tr>
          <tr>
            <td>Balance</td>
            <td>Running total after each transaction</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}