"use client";

import { useState } from "react";

interface Item {
  description: string;
  amount: string;
}

export default function InvoicePage() {
  const [customer, setCustomer] = useState("");
  const [invoiceDate, setInvoiceDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [items, setItems] = useState<Item[]>([
    { description: "", amount: "" },
  ]);

  function updateItem(index: number, field: keyof Item, value: string) {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  }

  function addItem() {
    setItems([
      ...items,
      { description: "", amount: "" },
    ]);
  }

  function removeItem(index: number) {
    setItems(items.filter((_, i) => i !== index));
  }

  function duplicateItem(index: number) {
    const updated = [...items];
    updated.splice(index + 1, 0, { ...items[index] });
    setItems(updated);
  }

  const total = items.reduce(
    (sum, item) => sum + (parseFloat(item.amount) || 0),
    0
  );

  function generatePdf() {
    const invoiceNumber = `INV-${Date.now().toString().slice(-6)}`;

    const content = `
      <html>
        <head>
          <title>${invoiceNumber}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 40px;
              color: #111827;
            }

            .header {
              display: flex;
              justify-content: space-between;
              margin-bottom: 40px;
            }

            h1 {
              margin: 0;
              font-size: 32px;
            }

            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
            }

            th, td {
              padding: 12px;
              border-bottom: 1px solid #e5e7eb;
            }

            th {
              text-align: left;
              background: #f9fafb;
            }

            .total {
              text-align: right;
              font-size: 22px;
              font-weight: bold;
              margin-top: 24px;
            }

            .footer {
              margin-top: 50px;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
              color: #4b5563;
              line-height: 1.6;
            }
          </style>
        </head>

        <body>
          <div class="header">
            <div>
              <h1>WMS Scotland</h1>
              <div>Mobile Mechanic • Dunbar, East Lothian</div>
              <div>07593 065949</div>
              <div>info@wmsscotland.com</div>
            </div>

            <div style="text-align:right">
              <h2>INVOICE</h2>
              <div><strong>${invoiceNumber}</strong></div>
              <div>${invoiceDate}</div>
            </div>
          </div>

          <h3>Bill To</h3>
          <div>${customer || "Customer"}</div>

          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th style="width:140px;text-align:right">Amount</th>
              </tr>
            </thead>

            <tbody>
              ${items
                .filter(
                  (i) => i.description || i.amount
                )
                .map(
                  (item) => `
                    <tr>
                      <td>${item.description}</td>
                      <td style="text-align:right">£${(
                        parseFloat(item.amount) || 0
                      ).toFixed(2)}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>

          <div class="total">
            Total: £${total.toFixed(2)}
          </div>

          <div class="footer">
            <div><strong>Bank Details</strong></div>
            <div>Account: 43898801</div>
            <div>Sort code: 04-00-05</div>
            <div>Not VAT registered</div>
          </div>
        </body>
      </html>
    `;

    const printWindow = window.open(
      "",
      "_blank"
    );

    if (!printWindow) return;

    printWindow.document.write(content);
    printWindow.document.close();

    setTimeout(() => {
      printWindow.print();
    }, 500);
  }

  return (
    <main className="min-h-screen bg-[#0b1220] p-6 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-black">
              Invoice Generator
            </h1>
            <p className="mt-2 text-gray-400">
              Create professional invoices for private and commercial customers.
            </p>
          </div>

          <button
            onClick={generatePdf}
            className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black transition hover:bg-cyan-400"
          >
            📄 Generate PDF
          </button>
        </div>

        <div className="rounded-3xl border border-cyan-500/20 bg-[#101935] p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-cyan-300">
                Customer / Company
              </label>

              <input
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                placeholder="e.g. Lord of the Trees"
                className="w-full rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-cyan-300">
                Invoice Date
              </label>

              <input
                type="date"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
                className="w-full rounded-xl border border-gray-700 bg-[#0b1220] px-4 py-3 text-white"
              />
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-800 bg-[#0b1220] p-4"
              >
                <div className="grid gap-4 md:grid-cols-[1fr_160px]">
                  <input
                    value={item.description}
                    onChange={(e) =>
                      updateItem(
                        index,
                        "description",
                        e.target.value
                      )
                    }
                    placeholder="Job description"
                    className="rounded-xl border border-gray-700 bg-[#0f172a] px-4 py-3 text-white"
                  />

                  <input
                    type="number"
                    step="0.01"
                    value={item.amount}
                    onChange={(e) =>
                      updateItem(
                        index,
                        "amount",
                        e.target.value
                      )
                    }
                    placeholder="0.00"
                    className="rounded-xl border border-gray-700 bg-[#0f172a] px-4 py-3 text-white"
                  />
                </div>

                <div className="mt-3 flex gap-2">
                  <button
                    onClick={() => duplicateItem(index)}
                    className="rounded-lg border border-cyan-500/30 px-3 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-500/10"
                  >
                    Duplicate
                  </button>

                  {items.length > 1 && (
                    <button
                      onClick={() => removeItem(index)}
                      className="rounded-lg border border-red-500/30 px-3 py-2 text-sm font-semibold text-red-300 hover:bg-red-500/10"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <button
              onClick={addItem}
              className="rounded-xl border border-cyan-500 px-5 py-3 font-bold text-cyan-300 transition hover:bg-cyan-500/10"
            >
              ➕ Add Job
            </button>

            <div className="rounded-2xl bg-cyan-500/10 px-6 py-4 text-right">
              <div className="text-sm text-cyan-300">
                Total Due
              </div>

              <div className="text-3xl font-black text-white">
                £{total.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}