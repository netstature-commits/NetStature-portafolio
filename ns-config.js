/* =====================================================
   NetStature: configuración compartida (sitio + panel /owner)
   Pega aquí los datos de tu proyecto de Supabase:
   url     = "Project URL" (https://xxxx.supabase.co)
   anonKey = la clave PUBLISHABLE (empieza con sb_publishable_) o la clave "anon" antigua (empieza con eyJ).
   NUNCA pegues aquí la clave "secret" ni "service_role".
   Mientras estén vacíos, el formulario envía por WhatsApp y no se mide nada.
   (La clave publishable/anon es pública por diseño: la seguridad real está en las reglas de supabase.sql)
   ===================================================== */
window.NS_CONFIG = {
  owners: ['netstature@gmail.com', 'wquispegutie861@gmail.com'],   // cuentas que pueden entrar a /owner
  defaultCountry: '591',   // prefijo para abrir WhatsApp cuando el cliente deja un número sin código de país
  supabase: {
    url: 'https://xqivcrilckozccaysoif.supabase.co',
    anonKey: 'sb_publishable_FKs1To7IV_7Sqr2BGL23-A_UrH1F-2X'
  }
};
