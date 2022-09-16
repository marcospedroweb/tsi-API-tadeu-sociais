const regexValidations = {
  email:
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
  cpf: /\d{3}[.-]?\d{3}[.-]?\d{3}-?\d{2}/g,
  tel: /\(?\d{2}\)? ?\d{5}-?\d{4}/g,
};

export default regexValidations;
