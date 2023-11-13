"use client";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
export default function Modal({
  isOpen,
  setIsOpen,
  termsAccepted,
  setTermsAccepted,
}: any) {
  let [nextTerm, setNextTerms] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [notAccepted, setNotAccepted] = useState(false);
  const [error, setError] = useState(false);
  const [step, setStep] = useState(1);

  const getLayout = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Dialog.Description className="w-full flex items-center justify-center min-h-[200px] text-justify text-base text-[#072137] px-5 py-2 ">
              Considerando que os documentos criados pela Contratada são de
              propriedade intelectual da Contratada e cedido somente para uso
              exclusivo do adquirente profissional ora contratante em seu
              restrito benefício privado e seu consultório ou instituto na qual
              atua localmente, é vedado a sua divulgação, venda ou
              compartilhamento para terceiros. Desta forma o adquirente desta
              cessão de uso , está plenamente ciente que lhe é vedado (proibido)
              o compartilhamento, cessão ou qualquer meio de transferência dos
              documentos adquiridos desta plataforma para terceiros.
            </Dialog.Description>

            <div className="flex flex-col gap-2 w-full py-5">
              <label className="flex w-full gap-3">
                <input
                  className="w-6 h-6"
                  type="checkbox"
                  name="accepted"
                  checked={accepted}
                  onChange={handleAccepted}
                />
                Sim, utilizarei apenas para minha atividade Profissional e de
                minha equipe.
              </label>
              <label className="flex w-full gap-3">
                <input
                  className="w-6 h-6"
                  type="checkbox"
                  name="notAccepted"
                  checked={!accepted}
                  onChange={handleAccepted}
                />
                Não concordo com os termos de uso.
              </label>
            </div>
            {error && (
              <p className="text-red-500">
                Necessário aceitar os termos de uso
              </p>
            )}
          </>
        );
      case 2:
        return (
          <>
            <Dialog.Description className="w-full flex items-center justify-center min-h-[200px] text-justify text-base text-[#072137] px-5 py-2 ">
              Considerando que os documentos modelos foram elaborados e
              sugeridos por Juristas e profissionais da área da saúde, em
              atividade meio, é obrigação da contratante revisar e alterar
              qualquer conteúdo que, sob a sua ótica, esteja em desacordo com as
              melhores práticas na área da saúde e demais assuntos pertinentes a
              área de conhecimento da Contratante. A contratante ao utilizar os
              documentos modelos não promovendo alteração no conteúdo de saúde
              ou jurídico valida o conteúdo dos modelos automaticamente, como
              adequados.
            </Dialog.Description>

            <div className="flex gap-2 w-full py-5">
              <div className="flex flex-col gap-2 w-full py-5">
                <label className="flex w-full gap-3">
                  <input
                    className="w-6 h-6"
                    type="checkbox"
                    name="accepted"
                    checked={notAccepted}
                    onChange={handleNotAccepted}
                  />
                  Sim, utilizarei apenas para minha atividade Profissional e de
                  minha equipe.
                </label>
                <label className="flex w-full gap-3">
                  <input
                    className="w-6 h-6"
                    type="checkbox"
                    name="notAccepted"
                    checked={!notAccepted}
                    onChange={handleNotAccepted}
                  />
                  Não concordo com os termos de uso.
                </label>
              </div>
            </div>
            {error && (
              <p className="text-red-500">
                Necessario aceitar os termos de uso
              </p>
            )}
          </>
        );
      case 3:
        return (
          <div className="w-full flex flex-col items-center justify-center min-h-[200px] text-justify text-base text-[#072137] px-5 py-2 ">
            <p>
            Ao aceitar os termos de uso, você concorda em cumprir e respeitar integralmente as seguintes diretrizes e condições estabelecidas neste documento. Estes termos de uso formam um contrato legal entre você e Harmonização Prontuários e regem o uso de nossos serviços e plataformas online.
            </p>
            <div className="flex gap-2 justify-center items-center w-full ">
              <button
                className="mt-4 mb-8  rounded-md bg-green-700 px-6 py-3 font-medium text-white"
                onClick={handleAcceptedTerms}
              >
                Aceito os termos de uso
              </button>

              <button
                className="  mt-4 mb-8  rounded-md bg-red-700 px-6 py-3 font-medium text-white"
                onClick={handleCancel}
              >
                Não aceito os termos de uso
              </button>
            </div>
          </div>
        );
      default:
        return <h1>Mostrar conteudo um</h1>;
    }
  };
  const handleMenus = () => {
    setStep(step - 1);
  };
  const handlePlus = () => {
    if (step === 1 && accepted === false) {
      setError(true);
      return;
    } else if (step === 2 && notAccepted === false) {
      setError(true);
      return;
    }
    setStep(step + 1);
  };
  const handleAccepted = () => {
    setAccepted(!accepted);
    setError(accepted);
  };
  const handleNotAccepted = () => {
    setNotAccepted(!notAccepted);
    setError(notAccepted);
  };
  const handleAcceptedTerms = async () => {
    if (accepted === true && notAccepted === true) {
      setTermsAccepted(true);
      const request = await fetch("/api/terms", {
        method: "POST",
        body: JSON.stringify({ accepted, notAccepted }),
      });
      const reponse = await request.json();

      setNextTerms(false);
      setIsOpen(false);
      setStep(1);
    } else {
      return alert("Error");
    }
  };
  const handleCancel = () => {
    setNextTerms(false);
    setIsOpen(false);
    setStep(1);
    setAccepted(false);
    setNotAccepted(false);
  };
  return (
    <Dialog
      className="  bg-opacity w-full h-full top-0 bottom-0 left-0 z-50  right-0 py-10 absolute "
      open={isOpen}
      onClose={handleCancel}
    >
      <Dialog.Panel className="flex items-center justify-center flex-col w-[80%]  py-4 mx-auto bg-white px-5 pt-5 rounded-md  relative">
        <div className="w-full flex items-center justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8  rounded-full border-2 border-red-600"
          >
            X
          </button>
        </div>

        <Dialog.Title className="text-lg md:text-2xl text-[#072137] font-semibold">
          Termos e Condições de Uso{" "}
        </Dialog.Title>
        <div>{getLayout()}</div>
        <div className="flex gap-2">
          <button
            className="border-2 border-gray-400 py-1 px-4 bg-slate-400 rounded-md"
            onClick={handleMenus}
            disabled={step === 1}
          >
            Voltar
          </button>
          <button
            className="border-2 border-gray-400 py-1 px-4 bg-slate-400 rounded-md"
            onClick={handlePlus}
            disabled={step === 3}
          >
            Proximo
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
