import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography, Button, ListItem } from "@mui/material";
import { BankAccount } from "../models";

const StyledListItem = styled(ListItem)(({ theme }) => ({
  [`& .redButton`]: {
    backgroundColor: "red",
    color: "white",
  },
}));

export interface BankAccountListItemProps {
  bankAccount: BankAccount;
  deleteBankAccount: Function;
}

const BankAccountListItem: React.FC<BankAccountListItemProps> = ({
  bankAccount,
  deleteBankAccount,
}) => {
  return (
    <StyledListItem data-test={`bankaccount-list-item-${bankAccount.id}`}>
      <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
        <Grid item>
          <Typography variant="body1" color="primary" gutterBottom>
            {bankAccount.bankName} {bankAccount.isDeleted ? "(Deleted)" : undefined}
          </Typography>
        </Grid>
        {!bankAccount.isDeleted && (
          <Grid item>
            <Button
              variant="contained"
              color="error"
              size="large"
              data-test="bankaccount-delete"
              onClick={() => {
                deleteBankAccount({ id: bankAccount.id });
              }}
            >
              Delete
            </Button>
          </Grid>
        )}
      </Grid>
    </StyledListItem>
  );
};

export default BankAccountListItem;
