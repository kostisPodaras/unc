import { useState } from "react";
import { Grid } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { loanRepository, Loan as LoanProps } from "./data";
import { LoanDetails, Loans } from "./components";

function App() {
  // Had no time left. I would setup a global state with redux toolkit or via contex, and consume data from there instead of passing them from here and making unecesery re-renders
  const [loans, setLoans] = useState(loanRepository);

  const handleDelete = (id: string) => {
    setLoans((prevState) => prevState.filter((loan) => loan.id !== id));
  };

  const handleCreate = (newLoan: LoanProps) => {
    setLoans((prevState) => [...prevState, { ...newLoan }]);
  };

  // I did not understand users from one organisation do not see other organisation loans.
  // Lets say Im a user from org-1, I should see loans only from org1?
  // Then when I create a loan, org will always be 1? If not comment the following and pass loans as prop to Loans

  const myLoans = loans.filter((loan) => loan.organisation === "org-1");

  return (
    <BrowserRouter>
      <div className="App">
        <Grid>
          <Routes>
            <Route
              path="/"
              element={
                <Loans
                  loans={myLoans}
                  handleDelete={handleDelete}
                  handleCreate={handleCreate}
                />
              }
            />
            <Route
              path="/details/:id"
              element={<LoanDetails loans={myLoans} />}
            />
          </Routes>
        </Grid>
      </div>
    </BrowserRouter>
  );
}

export default App;
