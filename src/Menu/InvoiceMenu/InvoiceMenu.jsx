export const InvoiceMenu = ({ items }) => (
  <div>
    <ul className="menu__invoice">
      {items.map((invoiceItem) => (
        <li>
          <a href={invoiceItem.href}>{invoiceItem.label}</a>
        </li>
      ))}
    </ul>
  </div>
);
