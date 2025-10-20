import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { ProductCard } from "@/components/ProductCard";
import { Flame, Shield, Package, Users, Lock, Wrench, Clock } from "lucide-react";

import logoAmotorizada from "@/assets/logo-amotorizada.png";
import heroBike from "@/assets/hero-bike.jpg";
import pneuPraieiro from "@/assets/pneu-praieiro.jpg";
import bancoXr from "@/assets/banco-xr.jpg";
import escapeEsportivo from "@/assets/escape-esportivo.jpg";
import kitCompleto from "@/assets/kit-completo.jpg";
import guilhermeSalles from "@/assets/guilherme-salles.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-racing-black">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-racing-black">
        <div className="absolute inset-0">
          <img src={heroBike} alt="Bike motorizada com fogo" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-racing-black/60 via-racing-black/80 to-racing-black" />
        </div>

        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative z-10 py-14 sm:py-20 text-center">
          <div className="flex justify-center mb-8 animate-fade-in">
            <img src={logoAmotorizada} alt="Amotorizada Brasil" className="w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow-2xl" />
          </div>

          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold text-sm sm:text-base mb-6 pulse-glow animate-fade-in">
            <Flame className="w-5 h-5" />
            <span className="uppercase tracking-wider">Black Friday Antecipada</span>
          </div>

          <h1 className="font-inter mb-3 font-black leading-tight animate-fade-in text-[clamp(1.6rem,5.5vw,3.6rem)] sm:text-[clamp(2.2rem,5vw,4.2rem)]">
            <span className="text-racing-white">🚀 Black Friday Antecipada</span>
            <br />
            <span className="text-primary text-glow-orange">Até 50% OFF</span>
          </h1>

          <p className="text-[clamp(.95rem,2.6vw,1.15rem)] sm:text-lg lg:text-xl text-racing-gray-light max-w-3xl mx-auto mb-3 animate-fade-in">
            A promoção começou antes! Aproveite as ofertas exclusivas da Shopee e turbine sua bike com estilo e segurança.
          </p>

          <Button asChild variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 mb-10 sm:mb-12 animate-fade-in w-full sm:w-auto whitespace-nowrap">
            <a href="https://collshp.com/amotorizadabrasil?fbclid=PAZXh0bgNhZW0CMTEAAaeWrDNaFgAomkQ1O5m6k3UFKpJ7MYmo2siAt2VtCHN1ITUjA1exb2FDH4hbOw_aem_GClo2jkaY2SXTtXWjUTg1g" target="_blank" rel="noopener noreferrer">Ver Ofertas Agora 🔥</a>
          </Button>

          <div className="max-w-3xl mx-auto bg-racing-black/80 backdrop-blur-md rounded-2xl p-6 border-2 border-primary shadow-2xl animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-primary" />
              <h2 className="text-xl sm:text-2xl font-bold font-inter text-racing-white">⏰ Termina em</h2>
            </div>
            <div className="flex flex-wrap items-stretch justify-center gap-3 sm:gap-4">
              <CountdownTimer targetISO="2025-10-28T23:59:59-03:00" />
            </div>
            <p className="text-racing-gray-light text-sm sm:text-base mt-4 text-center">
              Garanta seu desconto antes do fim!
            </p>
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section className="bg-racing-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black font-inter mb-4 text-racing-black">Produtos em Destaque</h2>
            <p className="text-xl text-racing-gray-light">Os mais vendidos com descontos imperdíveis</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            <ProductCard image={escapeEsportivo} title="Descanso Apoio Central" discount="-50%" link="https://shopee.com.br/product/373745451/22092579317?channel_code=MyCollection&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVHQ3ZkZSUTMrR3pBWmZZNzdrcnRBMzl3ODhDLzI1ZlFHamJqR2txdkR1ajZveHNxUU5sTmlkV1VzbU9CZXRCRWpzU1RhR3haV25KTEtZbTBhTXhMOEN4NGtlVXdNWEhkVkpDcExUTkJtTHBBZWt3OEFPa1BXUmViSFBIUjhJQmNlMEY3emxaWVV1U0V4TFlUMjRnaHBnPQ&uls_trackid=53vvg0bq00rd&utm_campaign=id_KIHVYbP8oI&utm_content=----&utm_medium=affiliates&utm_source=an_18314510086&utm_term=du3kyqsz3re3" />
            <ProductCard image={pneuPraieiro} title="Pneu Praieiro Aro 26 - Alta Performance" discount="-44%" link="https://shopee.com.br/product/369650932/41007356503?channel_code=MyCollection&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVHQ3ZkZSUTMrR3pBWmZZNzdrcnRBMWJFR05FcEVaai8vOGprUXlHZUtPRVBaRk5OdXpCNDkvQjJvV0c5OXZGS2kxZVg3aVZZWEtJQmh1dmNGWUQ2eVdpaUhZZXR1ejI5WTZWTVU3bjJsMlN0THVwYm5nWG5tS2g0RnN3S0xnK2kzM3U3dGYxU0tHcWs3REdQNjhNOGRjPQ&uls_trackid=53vvapsa00rr&utm_campaign=id_K6yxqKmtny&utm_content=----&utm_medium=affiliates&utm_source=an_18314510086&utm_term=du3gym3fa25d" />
            <ProductCard image={bancoXr} title="Banco XR Esportivo - Conforto e Estilo" discount="-23%" link="https://shopee.com.br/product/1068161541/22097311841?channel_code=MyCollection&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkWHlFU0hvQlZFVENpb1FnT09uNDlDSUJ5WXF0M1hibXZVc05TR2ZGbGpSV0lwc0NDQkVXZERvRU9YRWJwWk1hODBrQXl1YllKdG1TdDdlOGhYTDhDUDZSUDVmZ0xKcXc0aEpsbGVWaUFWQ053djNFUW5oeVd5WjFjNHFxQnowTnpkTlZVRjg4Z1FvMERXVFFTTStNMERBPQ&uls_trackid=53vvauch01r7&utm_campaign=id_IkgOE0dvok&utm_content=----&utm_medium=affiliates&utm_source=an_18314510086&utm_term=du3h3advpgjq" />
          </div>
        </div>
      </section>

      {/* KIT COMPLETO */}
      <section className="bg-racing-black py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">

              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm mb-6">
                  <Wrench className="w-4 h-4" />
                  <span>KIT COMPLETO</span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-black font-inter mb-6 text-racing-white">Monte sua Motorizada 🔧</h2>

                <p className="text-lg text-racing-gray-light mb-6">
                  Garanta seu kit completo e receba um guia com o passo a passo para montar sua bike motorizada.
                </p>

                <div className="bg-racing-gray/30 border border-primary/30 rounded-lg p-6 mb-8">
                  <p className="text-racing-white font-semibold">
                    ✅ Kit completo com todas as peças<br />
                    ✅ Guia de montagem passo a passo<br />
                    ✅ Suporte especializado via WhatsApp<br />
                    ✅ Garantia de qualidade
                  </p>
                </div>

                <Button
                  asChild
                  variant="hero"
                  size="lg"
                  className="
                    w-full
                    text-sm sm:text-lg
                    px-4 py-4 sm:px-8 sm:py-6
                    whitespace-normal sm:whitespace-nowrap   /* <-- quebra no mobile, não no desktop */
                    leading-tight text-center
                  "
                >
                  <a
                    href="https://chat.whatsapp.com/Jr69KkUAIen5xTNcmKZQBk?mode=ems_copy_t&fbclid=PAZXh0bgNhZW0CMTEAAacfdXqY0LjOUfVBYWN5bOwS4VGSHPa4DJt0ZPo_qzaFAebQYUXKXeW2HFjJcA_aem_mZdTYYh9BAjAXNFYhUfgVg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Garantir meu Kit + Suporte no WhatsApp
                  </a>
                </Button>
              </div>

              <div className="order-1 lg:order-2">
                <div className="mx-auto w-full max-w-[360px] sm:max-w-[480px] lg:max-w-none
                                rounded-2xl shadow-2xl border-2 border-primary/50 overflow-hidden">
                  <div className="aspect-video w-full">
                    <img
                      src={kitCompleto}
                      alt="Kit completo para motorizada"
                      className="block w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PROVAS SOCIAIS */}
      <section className="bg-racing-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* ⬇️ AQUI trocamos a grid */}
            <div
              className="
                grid grid-cols-1
                min-[360px]:grid-cols-3      /* 3 colunas já em telas >= 360px */
                gap-3 sm:gap-8
                text-center items-stretch
              "
            >
              {/* card 1 */}
              <div className="flex flex-col items-center p-3 sm:p-6">
                <div className="w-12 h-12 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Users className="w-6 h-6 sm:w-10 sm:h-10 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-3xl font-black font-inter text-racing-black mb-1 sm:mb-2">
                  300 mil
                </h3>
                <p className="text-xs sm:text-base text-racing-gray-light">
                  Seguidores confiando na marca
                </p>
              </div>

              {/* card 2 */}
              <div className="flex flex-col items-center p-3 sm:p-6">
                <div className="w-12 h-12 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Lock className="w-6 h-6 sm:w-10 sm:h-10 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-3xl font-clack font-inter text-racing-black mb-1 sm:mb-2">
                  100%
                </h3>
                <p className="text-xs sm:text-base text-racing-gray-light">
                  Pagamento seguro pela Shopee
                </p>
              </div>

              {/* card 3 */}
              <div className="flex flex-col items-center p-3 sm:p-6">
                <div className="w-12 h-12 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Package className="w-6 h-6 sm:w-10 sm:h-10 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-3xl font-black font-inter text-racing-black mb-1 sm:mb-2">
                  Rápida
                </h3>
                <p className="text-xs sm:text-base text-racing-gray-light">
                  Entrega em todo o Brasil
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SOBRE O CRIADOR */}
      <section className="bg-racing-white py-20 border-t-4 border-racing-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <img src={guilhermeSalles} alt="Guilherme Salles - Fundador da Amotorizada Brasil" className="rounded-2xl shadow-2xl w-full max-w-sm border-4 border-primary" />
              </div>

              <div>
                <h2 className="text-4xl sm:text-5xl font-black font-inter mb-4 text-racing-black">Sobre o Criador</h2>
                <h3 className="font-montserrat text-2xl font-black text-primary mb-4">Guilherme Salles</h3>
                <p className="text-lg text-racing-gray-light mb-6">
                  Fundador da <strong className="text-racing-black">@amotorizada_brasil</strong>, com mais de 300 mil seguidores nas redes sociais. Especialista em bikes motorizadas e apaixonado por alta performance.
                </p>
                <p className="text-lg text-racing-gray-light mb-8">
                  Há anos ajudando entusiastas a turbinar suas bikes com qualidade, segurança e estilo. Cada produto é testado e aprovado pela comunidade.
                </p>
                <Button asChild variant="hero" size="lg">
                  <a href="https://instagram.com/amotorizada_brasil" target="_blank" rel="noopener noreferrer">Seguir no Instagram</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP */}
      <section className="bg-racing-black py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-racing opacity-50" />
        <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold text-base mb-6 pulse-glow">
              <Shield className="w-5 h-5" />
              <span className="uppercase tracking-wider">Grupo Exclusivo</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black font-inter mb-6 text-racing-white">🚨 Grupo VIP Black Friday</h2>
            <p className="text-xl text-racing-gray-light mb-8">
              Entre no grupo e receba cupons exclusivos antes de todo mundo! Ofertas relâmpago, lançamentos em primeira mão e muito mais.
            </p>
            <Button asChild variant="hero" size="lg" className="text-lg sm:text-xl px-8 sm:px-10 py-5 sm:py-7 w-full sm:w-auto whitespace-nowrap">
              <a href="https://chat.whatsapp.com/Jr69KkUAIen5xTNcmKZQBk?mode=ems_copy_t&fbclid=PAZXh0bgNhZW0CMTEAAacfdXqY0LjOUfVBYWN5bOwS4VGSHPa4DJt0ZPo_qzaFAebQYUXKXeW2HFjJcA_aem_mZdTYYh9BAjAXNFYhUfgVg" target="_blank" rel="noopener noreferrer">Entrar no Grupo WhatsApp 🔥</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-racing-black border-t-2 border-primary py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6">
            <img src={logoAmotorizada} alt="Amotorizada Brasil" className="w-20 h-20 object-contain" />
            <div className="flex gap-8 text-racing-white">
              <a href="https://instagram.com/amotorizada_brasil" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
              <a href="https://collshp.com/amotorizadabrasil?fbclid=PAZXh0bgNhZW0CMTEAAaeWrDNaFgAomkQ1O5m6k3UFKpJ7MYmo2siAt2VtCHN1ITUjA1exb2FDH4hbOw_aem_GClo2jkaY2SXTtXWjUTg1g" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Shopee</a>
              <a href="https://www.youtube.com/@amotorizadabrasil" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">YouTube</a>
            </div>
            <p className="text-racing-gray-light text-center text-sm">© 2025 Amotorizada Brasil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
