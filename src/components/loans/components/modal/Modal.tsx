import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import withStyles from "@material-ui/core/styles/withStyles";

import { Loan as LoanProps } from "data";

interface ModalProps {
  classes: any;
  toggleValue: boolean;
  handleCreate: (newLoan: LoanProps) => void;
  setToggleValue: (prevState: boolean) => void;
}

const Loans: React.FC<ModalProps> = ({
  classes,
  toggleValue,
  handleCreate,
  setToggleValue,
}): JSX.Element => {
  const [amount, setAmount] = useState("");

  const resetModal = () => {
    setAmount("");
    setToggleValue(!toggleValue);
  };

  return (
    <Modal
      open={toggleValue}
      onClose={() => setToggleValue(!toggleValue)}
      className={classes.modal}
    >
      <div className={classes.paper}>
        <h3>Create</h3>
        <Grid container alignItems="center">
          <TextField
            autoFocus
            label="Amount"
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
          <Button
            disabled={!amount}
            onClick={() => {
              handleCreate({
                id: uuidv4(),
                amount: Number(amount),
                organisation: "org-1",
                // I guess we could add todays date, got confused by designs
                startDate: new Date(2020, 6, 1),
              });
              resetModal();
            }}
          >
            <AddCircleIcon />
          </Button>
        </Grid>
      </div>
    </Modal>
  );
};

export default withStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  addIcon: {
    position: "absolute",
    bottom: 30,
    right: 30,
  },
}))(Loans);
