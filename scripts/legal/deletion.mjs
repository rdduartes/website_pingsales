import { menuPt, menuEn, menuEs, langDeletion } from './shared.mjs';

export const dataDeletion = {
  slug: 'data-deletion',
  pt: {
    title: 'Instruções de Eliminação de Dados — PingSales',
    description: 'Instruções de Eliminação de Dados da PingSales: como solicitar a eliminação de dados pessoais e integrações Meta, Facebook, Instagram e Lead Ads.',
    ogTitle: 'Instruções de Eliminação de Dados — PingSales',
    ogLocale: 'pt_PT',
    kicker: 'Legal',
    heading: 'Instruções de <em class="grad font-normal">Eliminação de Dados</em>',
    updatedLabel: 'Última atualização',
    updated: '8 de julho de 2026',
    intro: 'Esta página explica como os utilizadores podem solicitar a eliminação dos seus dados pessoais tratados pela PingSales, incluindo dados associados a integrações com Meta, Facebook, Instagram, Messenger, Lead Ads e Marketing API.',
    menu: menuPt,
    menuMeta: 'NIF 519 518 128<br>EDIFÍCIO CIBT NERBE · BEJA · PT<br>',
    langLinks: langDeletion.pt,
    sections: [
      {
        title: '1. Responsável',
        body: `<div class="legal-block">
<p><b>PINGSALES AI SOLUTIONS, LDA</b><br>NIPC: 519518128<br>Sede: Rua Francisco Costa Gomes, Edifício CIBT NERBE, n.º 2, 7800-591 Beja, Portugal<br>Email de privacidade: <a href="mailto:privacy@pingsales.pt">privacy@pingsales.pt</a></p>
</div>`,
      },
      {
        title: '2. Como remover a ligação Meta dentro da PingSales',
        body: `<p>O utilizador pode remover a integração Meta através da plataforma PingSales:</p>
<ul>
<li>Entrar na conta PingSales.</li>
<li>Aceder a Definições.</li>
<li>Aceder a Integrações.</li>
<li>Selecionar Meta, Facebook ou Instagram.</li>
<li>Clicar em Remover ligação ou Desligar conta.</li>
</ul>
<p>Após remoção da integração, a PingSales deixará de aceder aos dados dessa conta através das APIs da Meta.</p>`,
      },
      {
        title: '3. Como pedir eliminação de dados',
        body: `<p>O utilizador pode pedir a eliminação dos seus dados através de email para:</p>
<p><a href="mailto:privacy@pingsales.pt">privacy@pingsales.pt</a></p>
<p>O pedido deve incluir:</p>
<ul>
<li>Nome.</li>
<li>Email associado à conta PingSales.</li>
<li>Empresa ou workspace, se aplicável.</li>
<li>Indicação de que pretende eliminar os dados pessoais e/ou dados associados à integração Meta.</li>
</ul>`,
      },
      {
        title: '4. Eliminação de dados associados à Meta',
        body: `<p>Quando recebermos um pedido válido, iremos eliminar ou anonimizar os dados pessoais associados à integração Meta, incluindo, quando aplicável:</p>
<ul>
<li>Identificadores de utilizador Meta.</li>
<li>Tokens de acesso.</li>
<li>Páginas Facebook ligadas.</li>
<li>Contas Instagram profissionais ligadas.</li>
<li>Contas de anúncios ligadas.</li>
<li>Formulários de leads sincronizados.</li>
<li>Leads obtidas através de Meta Lead Ads.</li>
<li>Mensagens e comentários obtidos através das APIs da Meta.</li>
<li>Dados técnicos da integração.</li>
</ul>
<p>A eliminação será efetuada no prazo máximo de 30 dias após validação do pedido, exceto quando a conservação seja necessária por obrigação legal, segurança, prevenção de fraude, faturação ou defesa de direitos.</p>
<p>Dados presentes em backups poderão permanecer por um período limitado até à rotação normal dos backups, sendo protegidos contra uso ativo.</p>`,
      },
      {
        title: '5. Pedido feito através da Meta',
        body: `<p>Se o utilizador fizer um pedido de eliminação através das definições da sua conta Facebook ou Meta, a PingSales processará esse pedido de acordo com os dados recebidos da Meta e eliminará ou anonimizará os dados aplicáveis.</p>`,
      },
      {
        title: '6. Dados que podem ter de ser conservados',
        body: `<p>Alguns dados podem ser conservados quando necessário para:</p>
<ul>
<li>Cumprimento de obrigações legais, fiscais ou contabilísticas.</li>
<li>Resolução de litígios.</li>
<li>Prevenção de fraude ou abuso.</li>
<li>Segurança da plataforma.</li>
<li>Comprovação de cumprimento contratual ou legal.</li>
</ul>
<p>Sempre que possível, os dados serão limitados, bloqueados ou anonimizados.</p>`,
      },
      {
        title: '7. Contacto',
        body: `<p>Para qualquer questão sobre eliminação de dados:</p>
<div class="legal-block">
<p><a href="mailto:privacy@pingsales.pt">privacy@pingsales.pt</a><br><b>PINGSALES AI SOLUTIONS, LDA</b><br>Rua Francisco Costa Gomes, Edifício CIBT NERBE, n.º 2, 7800-591 Beja, Portugal</p>
</div>`,
      },
    ],
  },
  en: {
    title: 'Data Deletion Instructions — PingSales',
    description: 'PingSales Data Deletion Instructions: how to request deletion of personal data and Meta, Facebook, Instagram and Lead Ads integrations.',
    ogTitle: 'Data Deletion Instructions — PingSales',
    ogLocale: 'en_US',
    kicker: 'Legal',
    heading: 'Data <em class="grad font-normal">Deletion</em> Instructions',
    updatedLabel: 'Last updated',
    updated: '8 July 2026',
    intro: 'This page explains how users can request deletion of their personal data processed by PingSales, including data associated with integrations with Meta, Facebook, Instagram, Messenger, Lead Ads and Marketing API.',
    menu: menuEn,
    menuMeta: 'VAT/NIF 519 518 128<br>CIBT NERBE BUILDING · BEJA · PT<br>',
    langLinks: langDeletion.en,
    sections: [
      {
        title: '1. Data controller',
        body: `<div class="legal-block">
<p><b>PINGSALES AI SOLUTIONS, LDA</b><br>Tax ID (NIPC): 519518128<br>Registered office: Rua Francisco Costa Gomes, Edificio CIBT NERBE, no. 2, 7800-591 Beja, Portugal<br>Privacy email: <a href="mailto:privacy@pingsales.pt">privacy@pingsales.pt</a></p>
</div>`,
      },
      {
        title: '2. How to remove the Meta connection within PingSales',
        body: `<p>The user may remove the Meta integration through the PingSales platform:</p>
<ul>
<li>Log in to the PingSales account.</li>
<li>Go to Settings.</li>
<li>Go to Integrations.</li>
<li>Select Meta, Facebook or Instagram.</li>
<li>Click Remove connection or Disconnect account.</li>
</ul>
<p>After removing the integration, PingSales will no longer access data from that account through Meta APIs.</p>`,
      },
      {
        title: '3. How to request data deletion',
        body: `<p>The user may request deletion of their data by email to:</p>
<p><a href="mailto:privacy@pingsales.pt">privacy@pingsales.pt</a></p>
<p>The request must include:</p>
<ul>
<li>Name.</li>
<li>Email associated with the PingSales account.</li>
<li>Company or workspace, if applicable.</li>
<li>Indication that they wish to delete personal data and/or data associated with the Meta integration.</li>
</ul>`,
      },
      {
        title: '4. Deletion of Meta-associated data',
        body: `<p>When we receive a valid request, we will delete or anonymise personal data associated with the Meta integration, including, where applicable:</p>
<ul>
<li>Meta user identifiers.</li>
<li>Access tokens.</li>
<li>Connected Facebook pages.</li>
<li>Connected professional Instagram accounts.</li>
<li>Connected ad accounts.</li>
<li>Synchronised lead forms.</li>
<li>Leads obtained through Meta Lead Ads.</li>
<li>Messages and comments obtained through Meta APIs.</li>
<li>Technical integration data.</li>
</ul>
<p>Deletion will be carried out within a maximum of 30 days after validation of the request, except where retention is necessary for legal obligation, security, fraud prevention, billing or defence of rights.</p>
<p>Data present in backups may remain for a limited period until normal backup rotation, and will be protected against active use.</p>`,
      },
      {
        title: '5. Request made through Meta',
        body: `<p>If the user submits a deletion request through their Facebook or Meta account settings, PingSales will process that request according to the data received from Meta and will delete or anonymise the applicable data.</p>`,
      },
      {
        title: '6. Data that may need to be retained',
        body: `<p>Some data may be retained when necessary for:</p>
<ul>
<li>Compliance with legal, tax or accounting obligations.</li>
<li>Dispute resolution.</li>
<li>Fraud or abuse prevention.</li>
<li>Platform security.</li>
<li>Proof of contractual or legal compliance.</li>
</ul>
<p>Wherever possible, data will be restricted, blocked or anonymised.</p>`,
      },
      {
        title: '7. Contact',
        body: `<p>For any questions about data deletion:</p>
<div class="legal-block">
<p><a href="mailto:privacy@pingsales.pt">privacy@pingsales.pt</a><br><b>PINGSALES AI SOLUTIONS, LDA</b><br>Rua Francisco Costa Gomes, Edificio CIBT NERBE, no. 2, 7800-591 Beja, Portugal</p>
</div>`,
      },
    ],
  },
  es: {
    title: 'Instrucciones de Eliminación de Datos — PingSales',
    description: 'Instrucciones de Eliminación de Datos de PingSales: cómo solicitar la eliminación de datos personales e integraciones Meta, Facebook, Instagram y Lead Ads.',
    ogTitle: 'Instrucciones de Eliminación de Datos — PingSales',
    ogLocale: 'es_ES',
    kicker: 'Legal',
    heading: 'Instrucciones de <em class="grad font-normal">Eliminación de Datos</em>',
    updatedLabel: 'Última actualización',
    updated: '8 de julio de 2026',
    intro: 'Esta página explica cómo los usuarios pueden solicitar la eliminación de sus datos personales tratados por PingSales, incluidos datos asociados a integraciones con Meta, Facebook, Instagram, Messenger, Lead Ads y Marketing API.',
    menu: menuEs,
    menuMeta: 'NIF 519 518 128<br>EDIFICIO CIBT NERBE · BEJA · PT<br>',
    langLinks: langDeletion.es,
    sections: [
      {
        title: '1. Responsable',
        body: `<div class="legal-block">
<p><b>PINGSALES AI SOLUTIONS, LDA</b><br>NIPC: 519518128<br>Domicilio social: Rua Francisco Costa Gomes, Edificio CIBT NERBE, n.º 2, 7800-591 Beja, Portugal<br>Email de privacidad: <a href="mailto:privacy@pingsales.pt">privacy@pingsales.pt</a></p>
</div>`,
      },
      {
        title: '2. Cómo eliminar la conexión Meta dentro de PingSales',
        body: `<p>El usuario puede eliminar la integración Meta a través de la plataforma PingSales:</p>
<ul>
<li>Iniciar sesión en la cuenta PingSales.</li>
<li>Acceder a Configuración.</li>
<li>Acceder a Integraciones.</li>
<li>Seleccionar Meta, Facebook o Instagram.</li>
<li>Hacer clic en Eliminar conexión o Desconectar cuenta.</li>
</ul>
<p>Tras eliminar la integración, PingSales dejará de acceder a los datos de esa cuenta a través de las APIs de Meta.</p>`,
      },
      {
        title: '3. Cómo solicitar la eliminación de datos',
        body: `<p>El usuario puede solicitar la eliminación de sus datos por email a:</p>
<p><a href="mailto:privacy@pingsales.pt">privacy@pingsales.pt</a></p>
<p>La solicitud debe incluir:</p>
<ul>
<li>Nombre.</li>
<li>Email asociado a la cuenta PingSales.</li>
<li>Empresa o workspace, si corresponde.</li>
<li>Indicación de que desea eliminar los datos personales y/o datos asociados a la integración Meta.</li>
</ul>`,
      },
      {
        title: '4. Eliminación de datos asociados a Meta',
        body: `<p>Cuando recibamos una solicitud válida, eliminaremos o anonimizaremos los datos personales asociados a la integración Meta, incluidos, cuando corresponda:</p>
<ul>
<li>Identificadores de usuario Meta.</li>
<li>Tokens de acceso.</li>
<li>Páginas de Facebook conectadas.</li>
<li>Cuentas profesionales de Instagram conectadas.</li>
<li>Cuentas publicitarias conectadas.</li>
<li>Formularios de leads sincronizados.</li>
<li>Leads obtenidas a través de Meta Lead Ads.</li>
<li>Mensajes y comentarios obtenidos a través de las APIs de Meta.</li>
<li>Datos técnicos de la integración.</li>
</ul>
<p>La eliminación se efectuará en un plazo máximo de 30 días tras la validación de la solicitud, excepto cuando la conservación sea necesaria por obligación legal, seguridad, prevención de fraude, facturación o defensa de derechos.</p>
<p>Los datos presentes en copias de seguridad podrán permanecer durante un período limitado hasta la rotación normal de las copias de seguridad, estando protegidos contra uso activo.</p>`,
      },
      {
        title: '5. Solicitud realizada a través de Meta',
        body: `<p>Si el usuario realiza una solicitud de eliminación a través de la configuración de su cuenta de Facebook o Meta, PingSales procesará esa solicitud de acuerdo con los datos recibidos de Meta y eliminará o anonimizará los datos aplicables.</p>`,
      },
      {
        title: '6. Datos que pueden tener que conservarse',
        body: `<p>Algunos datos pueden conservarse cuando sea necesario para:</p>
<ul>
<li>Cumplimiento de obligaciones legales, fiscales o contables.</li>
<li>Resolución de litigios.</li>
<li>Prevención de fraude o abuso.</li>
<li>Seguridad de la plataforma.</li>
<li>Comprobación de cumplimiento contractual o legal.</li>
</ul>
<p>Siempre que sea posible, los datos serán limitados, bloqueados o anonimizados.</p>`,
      },
      {
        title: '7. Contacto',
        body: `<p>Para cualquier cuestión sobre eliminación de datos:</p>
<div class="legal-block">
<p><a href="mailto:privacy@pingsales.pt">privacy@pingsales.pt</a><br><b>PINGSALES AI SOLUTIONS, LDA</b><br>Rua Francisco Costa Gomes, Edificio CIBT NERBE, n.º 2, 7800-591 Beja, Portugal</p>
</div>`,
      },
    ],
  },
};
