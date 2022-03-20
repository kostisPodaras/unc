import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import { Loan as LoanProps } from "data";

interface EnhancedLoanProps extends LoanProps {
  handleDelete: (id: string) => void;
  classes: any;
}

const Loan: React.FC<EnhancedLoanProps> = ({
  organisation,
  amount,
  id,
  classes,
  handleDelete,
}) => {
  const navigate = useNavigate();

  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Button
        size="small"
        onClick={() => {
          handleDelete(id);
        }}
      >
        X
      </Button>

      <Typography variant="body1">
        {organisation}: <span className={classes.amount}>{amount}</span>
      </Typography>

      <Fab
        size="small"
        onClick={() => {
          navigate(`/details/${id}`);
        }}
        className={classes.navigateIcon}
      >
        <NavigateNextIcon />
      </Fab>
    </Grid>
  );
};

export default withStyles({
  amount: {
    color: "green",
  },
  navigateIcon: {
    marginLeft: 24,
  },
})(Loan);
