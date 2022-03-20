import { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Grid, List } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import withStyles from "@material-ui/core/styles/withStyles";

import { Loan as LoanProps } from "data";

import { Loan, Modal } from "./components";
interface EnhancedLoanProps {
  loans: LoanProps[];
  handleDelete: any;
  handleCreate: any;
  classes: any;
}

const Loans: React.FC<EnhancedLoanProps> = ({
  loans,
  handleDelete,
  handleCreate,
  classes,
}): JSX.Element => {
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <>
      <Typography variant="body1">Your Loans</Typography>
      <Grid item>
        <List>
          {loans.map(({ id, organisation, amount, startDate }) => (
            <ListItem key={id}>
              <Loan
                organisation={organisation}
                amount={amount}
                startDate={startDate}
                id={id}
                handleDelete={handleDelete}
              />
            </ListItem>
          ))}
        </List>
      </Grid>

      <Fab
        onClick={() => setToggleValue(!toggleValue)}
        className={classes.addIcon}
        size="medium"
        aria-label="add"
      >
        <AddIcon />
      </Fab>

      <Modal
        handleCreate={handleCreate}
        toggleValue={toggleValue}
        setToggleValue={setToggleValue}
      />
    </>
  );
};

export default withStyles({
  addIcon: {
    position: "absolute",
    bottom: 30,
    right: 30,
  },
})(Loans);
