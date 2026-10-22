import  type { Invoice } from "./invoiceType";

import { formatCurrency, formatDate } from "./utils";

interface InvoiceSummaryTableProps {
    title: string;
    dateLabel: string;
    invoices: Invoice[];
    date: (invoice: Invoice) => string;
}

export default function InvoiceSummaryTable(Props: InvoiceSummaryTableProps) {
    return <div className="panel">
         <h2>{Props.title}</h2>
        <table>
            <thead>
                <tr>
                    <th>CLiente</th>
                    <th>valor</th>
                    <th className="numeric-date">{Props.dateLabel}</th>
                </tr>
            </thead>
            <tbody>
                {Props.invoices.map(invoice => {
                 return <tr key = {invoice.id}>
                        <td>{invoice.customer.name}</td>
                        <td className="numeric">{formatCurrency(invoice.amount)}</td>
                        <td className="numeric numeric-date">{formatDate(Props.date(invoice))}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>;
}