// @flow
import React, { Component } from "react";
import { Flex, Type, Input, Box, Buttons } from "blockstack-ui/dist";
import { Page } from "@components/page";
import { OnboardingNavigation } from "@containers/buttons/onboarding-navigation";
import { ROUTES } from "../../../routes";
import { BitcoinIcon, NoEntryIcon, UsbIcon, LockIcon } from "mdi-react";
import { HardwareSteps } from "@containers/hardware-steps";
import { doAddHardwareWallet, doFetchBalances } from "@stores/actions/wallet";
import { WALLET_TYPES } from "@stores/reducers/wallet";
import { connect } from "react-redux";
export const ledgerSteps = [
  {
    value: `Please connect your Ledger to your computer via USB.`,
    icon: UsbIcon
  },
  {
    value: "Unlock your Ledger by entering your PIN.",
    icon: LockIcon
  },
  {
    value: "Select the Bitcoin App on your Ledger.",
    icon: BitcoinIcon
  },
  {
    value: `Make sure you have "Browser Support" set to no.`,
    icon: NoEntryIcon
  }
];

export const LedgerSteps = connect(
  null,
  { doAddHardwareWallet }
)(({ doAddHardwareWallet, ...rest }) => {
  const handleSubmit = () => {
    doAddHardwareWallet(WALLET_TYPES.LEDGER);
  };
  return (
    <HardwareSteps steps={ledgerSteps}>
      {({ step, next, hasNext, hasPrev, prev }) => (
        <OnboardingNavigation
          back={hasPrev ? prev : ROUTES.RESTORE_HARDWARE}
          next={hasNext ? next : handleSubmit}
          nextLabel={hasNext ? "Next" : "Continue"}
        />
      )}
    </HardwareSteps>
  );
});

const LedgerPage = ({ style, ...rest }) => (
  <Page alignItems="center" justifyContent="center" title="Connect your Ledger" style={style}>
    <Flex width={1} flexDirection={"column"} maxWidth="600px">
      <Flex py={6} justifyContent="space-between" width={1}>
        <LedgerSteps />
      </Flex>
    </Flex>
  </Page>
);

export default LedgerPage;