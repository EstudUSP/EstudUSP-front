import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";
import { useEffect, useState } from "react";
import { TermsPopup } from "../../components/TermsPopup";

export function DefaultLayout() {
  const [isTermsPopupOpen, setIsTermsPopupOpen] = useState(false);

  useEffect(() => {
    const termsPopupState = localStorage.getItem('termsPopupState');
    if (termsPopupState !== 'closed') {
      setIsTermsPopupOpen(true);
    }
  }
  , []);
  return (
    <>
      <LayoutContainer>
        <Header />
      {!isTermsPopupOpen ? (
        <Outlet />
      ) : (
        <TermsPopup setOpen={setIsTermsPopupOpen} />
      )}
      </LayoutContainer>
    </>
  );
}
