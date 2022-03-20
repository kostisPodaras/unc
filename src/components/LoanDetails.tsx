import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import { Loan as LoanProps } from "data";

interface LoneDetailsProps {
  loans: LoanProps[];
}

const LoanDetails: React.FC<LoneDetailsProps> = ({ loans }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const loan = loans.find((loan) => loan.id === id);

  const startDate = loan?.startDate.toISOString().split("T")[0];

  return (
    <>
      <Typography>Loan id: {loan?.id}</Typography>
      <Typography>Amount: {loan?.amount}</Typography>
      <Typography>Start date: {startDate}</Typography>
      <Button size="small" onClick={() => navigate(-1)}>
        <KeyboardBackspaceIcon />
      </Button>
    </>
  );
};

export default LoanDetails;
