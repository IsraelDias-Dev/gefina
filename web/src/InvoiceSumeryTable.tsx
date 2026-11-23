import type { Invoice } from './invoiceType';

import { formatCurrency, formatDate } from './utils';

interface InvoiceSummaryTableProps {
  title: string;
  dateLabel: string;
  invoices: Invoice[];
  date: (invoice: Invoice) => string;
}

export default function InvoiceSummaryTable(
  Props: InvoiceSummaryTableProps,
) {
  const base = 'p-3 border-b border-border';

  return (
    <div className="flex-1 p-4 bg-surface border border-border rounded-surface">
      <h2 className="text-xl font-semibold">{Props.title}</h2>
      <table>
        <thead>
          <tr>
            <th
              className={`${base} text-sm text-left font-medium text-text-muted`}
            >
              Cliente
            </th>
            <th
              className={`${base} text-sm text-left font-medium text-text-muted`}
            >
              valor
            </th>
            <th
              className={`${base} text-sm text-left font-medium text-text-muted`}
            >
              {Props.dateLabel}
            </th>
          </tr>
        </thead>
        <tbody>
          {Props.invoices.map((invoice) => {
            return (
              <tr key={invoice.id}>
                <td className={base}>{invoice.customer.name}</td>
                <td className={`${base} tabular-nums`}>
                  {formatCurrency(invoice.amount)}
                </td>
                <td className={`${base} text-center tabular-nums`}>
                  {formatDate(Props.date(invoice))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
