<p><a target="_blank" href="https://invoice-manager-ks.netlify.app/" style="display: inline-block;"><img src="https://raw.githubusercontent.com/kunalkv2000/invoice-manager/refs/heads/main/assets/summary.png" /></a>

An Invoice Manager project built with React + Bootstrap + React-redux toolkit. Create a new Invoice, add itemized items, and configure quantity, prices, tax rates, and discounts. Download the Invoice as PDFs to your device. Manage several Invoices together. Edit, Delete, and Copy an existing Invoice. The Invoices are saved into LocalStorage. Uses [jspdf-react](https://www.npmjs.com/package/jspdf-react) to capture the data from the modal and covert it from canvas -> pdf.

## Features

* Integrated Redux for centralized state management.
* View all the invoices on the home page and manage them.
* Create new Invoice and Add itemized items, configure quantity, prices, tax rates and discounts
* View the full details of the Invoice by clicking the View button.
* Edit the full details of an existing invoice by clicking on the Edit button in the Full detail Invoice modal.
* Copy the details of an existing invoice using the copy button.
* Delete an Invoice. A confirmation dialog box will be shown.
* Download an Invoice in PDF format with a dynamically generated name using the invoice number.
* The Invoices are saved into LocalStorage so you can close and open the website but invoices will still be there.

## Live Demo

`https://invoice-manager-ks.netlify.app/`

## Github Repo
`https://github.com/kunalkv2000/invoice-manager`

### Installation

```bash
git clone https://github.com/kunalkv2000/invoice-manager.git

npm install

npm start / npm run build
```
