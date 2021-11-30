import { Paper, Box, Typography } from "@material-ui/core";
import { DepositSohm, LockInVault, ReceivesYield, ArrowGraphic } from "../../components/EducationCard";

export function GiveInfo() {
  return (
    <>
      <Paper className={"ohm-card secondary"}>
        <div className="give-info">
          <Box className="give-info-deposit-box">
            <DepositSohm />
            <Typography variant="body2">
              Olympus Give is a means of directing the yield that is accrued on your sOHM to another wallet. The first
              step is depositing your sOHM and specifying a recipient.
            </Typography>
          </Box>
          <ArrowGraphic />
          <Box className="give-info-vault-box">
            <LockInVault />
            <Typography variant="body2">
              Then, your deposited sOHM is kept in a vault smart contract that will send your rebases to the recipient.
              You can withdraw your principal sOHM amount at any time.
            </Typography>
          </Box>
          <ArrowGraphic />
          <Box className="give-info-yield-box">
            <ReceivesYield />
            <Typography variant="body2">
              The recipient you specified, or the project you selected, will then receive the rebases associated with
              your sOHM deposit until you withdraw your sOHM principal from the vault.
            </Typography>
          </Box>
        </div>
      </Paper>
    </>
  );
}
