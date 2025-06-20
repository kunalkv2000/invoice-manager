import React from "react";
import NavigationBar from "../components/NavigationBar";
import NoInvoices from "../components/NoInvoices";
import ShowInvoice from "../components/ShowInvoice";
import { addItem } from "../features/invoices/invoiceSlice";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Col, Row, Modal, Container } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { removeItem } from "../features/invoices/invoiceSlice";
import { BiShow } from "react-icons/bi";
import { HiOutlineDuplicate } from "react-icons/hi";
import { v4 as uuidV4 } from "uuid";

const ViewInvoice = () => {
  // Used useSelector hook to get the invoiceList from the store
  const { invoiceList } = useSelector((state) => state.invoices);

  // Used useDispatch hook to dispatch the removeItem action
  const dispatch = useDispatch();

  // Used useState hook to set the state of the modal for displaying the Invoice in detail
  const [isOpen, setIsOpen] = React.useState(false);

  // For sending the invoice details to the modal
  const [currentOpenInvoice, setCurrentOpenInvoice] = React.useState({});

  // Boolean value for displaying the delete confirmation dialog
  const [sureDelDialog, setSureDelDialog] = React.useState(false);

  // For storing the invoice number of the invoice to be deleted
  const [delInvoiceNum, setDelInvoiceNum] = React.useState("");

  // Function to close the modal
  const closeModal = (event) => setIsOpen(false);

  /**
   * Opens the Invoice details modal and sets the currentOpenInvoice state.
   * @param {string} itemID - The ID of the invoice to be viewed.
   * @returns {void}
   */
  const handleViewInvoice = (itemID) => {
    setIsOpen(true);
    const currentInvoice = invoiceList.find((item) => item.UID === itemID);
    setCurrentOpenInvoice(currentInvoice);
  };

  /**
   * Creates a copy of the invoice with a new UID and navigates to the edit page with the copied invoice.
   * @param {string} itemID - The ID of the invoice to be copied.
   * @returns {void}
   */
  const handleCopyInvoice = (itemID) => {
    const originalInvoice = invoiceList.find((item) => item.UID === itemID);
    const copiedInvoice = { ...originalInvoice, UID: uuidV4() }; // create a copy of the invoice with a new UID
    setCurrentOpenInvoice(copiedInvoice);
    // navigate("/edit", { state: { info: copiedInvoice, edit: true } });
    dispatch(addItem(copiedInvoice));
  };

  /**
   * Opens the delete confirmation dialog and sets the delInvoiceNum state to know which UID Invoice to delete.
   * @param {string} itemID - The ID of the invoice to be deleted.
   */
  const handleDeleteInvoice = (itemID) => {
    setSureDelDialog(true);
    setDelInvoiceNum(itemID);
  };

  return (
    <div>
      <NavigationBar />
      <h1 className="text ms-3 mt-3">Your Invoices</h1>
      {invoiceList.length === 0 && <NoInvoices />}
      <Container fluid>
        <Row xs={10} md={12} xl={4} lg={4}>
          {invoiceList?.map((invoice) => (
            <Col key={invoice.UID}>
              <Card style={{ minWidth: "17rem" }} className="rectInvoice">
                <Card.Header className="bg-black text-white fw-normal">
                  Invoice ID : {invoice.invoiceNumber}
                </Card.Header>
                <Card.Body>
                  <Card.Title className="mb-3">
                    Billing To: {invoice.billTo}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-danger">
                    Amount Due: {invoice.currency}
                    {""} {invoice.subTotal}
                  </Card.Subtitle>
                  <Card.Text className="text-dark">
                    Due Date: {invoice.dateOfIssue}
                  </Card.Text>
                </Card.Body>
                <div className="pb-4 px-3">
                  <Row>
                    <Col md={4} xs={4}>
                      <Button
                        variant="primary"
                        onClick={() => handleViewInvoice(invoice.UID)}
                      >
                        <BiShow
                          style={{
                            width: "16px",
                            height: "16px",
                            marginTop: "-3px",
                          }}
                          className="me-2"
                        />
                        View
                      </Button>
                    </Col>
                    <Col md={4} xs={4}>
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteInvoice(invoice.UID)}
                      >
                        <MdDelete
                          style={{
                            width: "16px",
                            height: "16px",
                            marginTop: "-3px",
                          }}
                          className="me-2"
                        />
                        Delete
                      </Button>
                    </Col>
                    <Col md={4} xs={4}>
                      <Button
                        variant="secondary"
                        onClick={() => handleCopyInvoice(invoice.UID)}
                      >
                        <HiOutlineDuplicate
                          style={{
                            width: "16px",
                            height: "16px",
                            marginTop: "-3px",
                          }}
                          className="me-2"
                        />
                        Copy
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {sureDelDialog && (
        <Modal
          show={sureDelDialog}
          onHide={() => setSureDelDialog(false)}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to Delete?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Invoice will be permanently deleted!</Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={() => setSureDelDialog(false)}>
              Cancel
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                dispatch(removeItem(delInvoiceNum));
                setSureDelDialog(false);
              }}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      {isOpen && (
        <ShowInvoice
          showModal={isOpen}
          closeModal={closeModal}
          info={currentOpenInvoice}
          items={currentOpenInvoice.items}
          currency={currentOpenInvoice.currency}
          subTotal={currentOpenInvoice.subTotal}
          taxAmmount={currentOpenInvoice.taxAmmount}
          discountAmmount={currentOpenInvoice.discountAmmount}
          total={currentOpenInvoice.total}
        />
      )}
    </div>
  );
};

export default ViewInvoice;
