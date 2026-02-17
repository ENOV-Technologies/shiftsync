export const POLICY_ROUTE = "/cookies";
export const POLICY_LAST_UPDATED = "11 de Fevereiro de 2026";
export const CONSENT_VERSION = "1.0";

export type CookieCategoryKey =
  | "necessary"
  | "analytics"
  | "functional"
  | "marketing";

export interface CookieCategoryConfig {
  key: CookieCategoryKey;
  title: string;
  required: boolean;
  descriptionShort: string;
  descriptionLong?: string;
}

export const cookieCategories: CookieCategoryConfig[] = [
  {
    key: "necessary",
    title: "Necessários",
    required: true,
    descriptionShort:
      "Cookies essenciais para autenticação, segurança e funcionalidade básica. Estes não podem ser desativados.",
    descriptionLong:
      "Inclui auth_session (estado de sessão), csrf_token (segurança), user_prefs (preferências de fuso horário/calendário) e cookie_consent (reconhecimento da política).",
  },
  {
    key: "analytics",
    title: "Analíticos",
    required: false,
    descriptionShort:
      "Análises de utilização anónimas para nos ajudar a melhorar o ShiftSync. Desenvolvido pela Vercel Analytics.",
    descriptionLong:
      "Utilizamos a Vercel Analytics para recolher dados de utilização anónimos e agregados. Nenhum dado pessoal é rastreado ou partilhado com anunciantes.",
  },
  {
    key: "functional",
    title: "Funcionais",
    required: false,
    descriptionShort:
      "Funcionalidades melhoradas e personalização. Atualmente não utilizados pelo ShiftSync.",
    descriptionLong:
      "Reservado para funcionalidades futuras que possam melhorar a sua experiência, como lembrar preferências de interface para além das essenciais.",
  },
  {
    key: "marketing",
    title: "Marketing",
    required: false,
    descriptionShort:
      "Cookies de publicidade e marketing. O ShiftSync não utiliza cookies de marketing.",
    descriptionLong:
      "O ShiftSync não utiliza quaisquer cookies de publicidade, marketing ou rastreamento de terceiros.",
  },
];
