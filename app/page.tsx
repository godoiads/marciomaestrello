"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  Award,
  CheckCircle,
  Star,
  Download,
  ShoppingCart,
  Target,
  TrendingUp,
  Shield,
  Zap,
  Menu,
  X,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// Declare fbq para TypeScript, se necessário, para evitar erros de tipo
declare global {
  interface Window {
    fbq: (arg1: string, arg2: string, arg3?: Record<string, any>) => void
  }
}

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Mensagem pré-preenchida para o WhatsApp, codificada para URL
  const whatsappMessage = encodeURIComponent(
    "Olá, Márcio! Tenho interesse em adquirir o livro 'Gestão e Governança de TI' com o desconto de 38% anunciado no site. Poderia me ajudar com o pedido?",
  )
  // Número de WhatsApp formatado para o link (com código do país e DDD)
  const whatsappNumber = "5511992605960"
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  // Função para rastrear evento de compra (Purchase)
  const trackPurchase = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Purchase", {
        value: 97.43, // Valor do livro impresso
        currency: "BRL",
      })
    }
  }

  // Função para rastrear evento de Lead (WhatsApp)
  const trackWhatsAppLead = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: "Contato WhatsApp Desconto",
      })
    }
  }

  // Função para rastrear evento de compra de E-book (Purchase)
  const trackEbookPurchase = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Purchase", {
        value: 0, // E-book não tem preço fixo aqui, ou defina um valor se souber
        currency: "BRL",
        content_name: "E-book Purchase",
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
            <span className="text-lg md:text-xl font-bold text-gray-900">Márcio Maestrello</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#sobre-livro" className="text-gray-600 hover:text-blue-600 transition-colors">
              Sobre o Livro
            </Link>
            <Link href="#autor" className="text-gray-600 hover:text-blue-600 transition-colors">
              Autor
            </Link>
            <Link href="#depoimentos" className="text-gray-600 hover:text-blue-600 transition-colors">
              Depoimentos
            </Link>
            <Link
              href="https://loja.uiclap.com/titulo/ua97524/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackPurchase}
            >
              <Button className="bg-blue-600 hover:bg-blue-700">Comprar Agora</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link
                href="#sobre-livro"
                className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre o Livro
              </Link>
              <Link
                href="#autor"
                className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Autor
              </Link>
              <Link
                href="#depoimentos"
                className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </Link>
              <Link
                href="https://loja.uiclap.com/titulo/ua97524/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackPurchase}
              >
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Comprar Agora</Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-8 md:py-12 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-sm">🚀 Lançamento Oficial</Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  Gestão e Governança de TI
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-medium">
                  O Guia Definitivo para Transformar sua Carreira e Liderar a Inovação Tecnológica
                </p>
                <p className="text-base md:text-lg text-gray-600">
                  Desvende os segredos da gestão estratégica de TI e torne-se o profissional que as empresas procuram.
                  Mais de 300 páginas de conhecimento prático e estratégico.
                </p>
              </div>

              <div className="flex flex-col gap-3 md:gap-4">
                <Link
                  href="https://loja.uiclap.com/titulo/ua97524/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackPurchase}
                >
                  <Button
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Comprar Versão Impressa
                  </Button>
                </Link>
                <Link
                  href="https://www.amazon.com.br/dp/B0F9VQJGK2"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackEbookPurchase}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 bg-transparent"
                  >
                    <Download className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Comprar E-book
                  </Button>
                </Link>
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppLead}>
                  <Button
                    size="lg"
                    className="w-full bg-green-500 hover:bg-green-600 text-white text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                  >
                    <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    QUERO MEU DESCONTO VIA WHATSAPP
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1">4.9/5 (127 avaliações)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>+2.500 profissionais impactados</span>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative mx-auto w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[480px]">
                <Image
                  src="/images/livro-capa-nova.png"
                  alt="Livro Gestão e Governança de TI - Márcio Maestrello - Nova Capa"
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-green-500 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold">
                  Disponível Agora!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nova Seção: Oferta Exclusiva WhatsApp */}
      <section className="py-12 md:py-16 bg-purple-700 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              OFERTA EXCLUSIVA:{" "}
              <span className="text-yellow-300 block mt-2">Garanta seu livro com 38% de DESCONTO!</span>
            </h2>
            <Badge className="absolute -top-4 right-0 md:-top-6 md:right-10 bg-yellow-300 text-purple-800 text-sm md:text-lg font-bold px-3 py-1 rounded-full rotate-3 shadow-lg">
              38% OFF
            </Badge>
          </div>
          <p className="text-lg md:text-xl mb-8">
            Peça agora mesmo o seu exemplar de &apos;Gestão e Governança de TI&apos; diretamente pelo WhatsApp e
            aproveite esta condição especial. Uma oportunidade única para impulsionar sua carreira com o conhecimento do
            Márcio Maestrello.
          </p>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppLead}>
            <Button
              size="lg"
              className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
            >
              <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              QUERO MEU DESCONTO VIA WHATSAPP
            </Button>
          </Link>
        </div>
      </section>

      {/* Sobre o Livro */}
      <section id="sobre-livro" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Transforme sua Carreira em TI
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Este livro vai além da teoria. Você aprenderá estratégias práticas e comprovadas para liderar projetos
                de TI e impulsionar a inovação em sua organização.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="bg-blue-100 p-2 md:p-3 rounded-lg flex-shrink-0">
                      <Target className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Estratégia e Planejamento</h3>
                      <p className="text-sm md:text-base text-gray-600">
                        Aprenda a alinhar a TI aos objetivos de negócio e criar roadmaps estratégicos eficazes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="bg-green-100 p-2 md:p-3 rounded-lg flex-shrink-0">
                      <Shield className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Governança e Compliance</h3>
                      <p className="text-sm md:text-base text-gray-600">
                        Domine frameworks como COBIT, ITIL e ISO 27001 para garantir conformidade e eficiência.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="bg-purple-100 p-2 md:p-3 rounded-lg flex-shrink-0">
                      <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Liderança e Gestão</h3>
                      <p className="text-sm md:text-base text-gray-600">
                        Desenvolva habilidades de liderança para gerenciar equipes e projetos complexos de TI.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="bg-orange-100 p-2 md:p-3 rounded-lg flex-shrink-0">
                      <Zap className="h-5 w-5 md:h-6 md:w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Inovação e Transformação</h3>
                      <p className="text-sm md:text-base text-gray-600">
                        Implemente processos de inovação e lidere a transformação digital em sua empresa.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 p-6 md:p-8 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">O que você vai aprender:</h3>
              <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                {[
                  "Frameworks de governança de TI (COBIT, ITIL, ISO 27001)",
                  "Estratégias de alinhamento entre TI e negócio",
                  "Gestão de riscos e segurança da informação",
                  "Liderança de equipes de alta performance",
                  "Metodologias ágeis aplicadas à gestão de TI",
                  "Indicadores e métricas de performance",
                  "Gestão de projetos e portfólio de TI",
                  "Transformação digital e inovação tecnológica",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem é o Livro */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
              Para Quem é Este Livro?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <Card className="p-4 md:p-6 text-center">
                <CardContent className="p-0">
                  <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Users className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">Profissionais de TI</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Analistas, coordenadores e gerentes que desejam evoluir para posições estratégicas
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6 text-center">
                <CardContent className="p-0">
                  <div className="bg-green-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Estudantes</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Universitários de TI, Administração e áreas correlatas que buscam conhecimento prático
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6 text-center">
                <CardContent className="p-0">
                  <div className="bg-purple-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Award className="h-6 w-6 md:h-8 md:w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Líderes e Gestores</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Executivos que precisam entender e otimizar a gestão de TI em suas organizações
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Autor */}
      <section id="autor" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/images/marcio-maestrello-nova-foto.png"
                  alt="Márcio Maestrello - Especialista em Gestão e Governança de TI"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg w-full max-w-sm mx-auto md:max-w-none"
                />
              </div>
              <div className="space-y-4 md:space-y-6 order-1 md:order-2">
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                    Márcio Maestrello
                  </h2>
                  <p className="text-lg md:text-xl text-blue-600 font-semibold mb-3 md:mb-4">
                    Autor de "Gestão e Governança de TI"
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-600">
                  <p>
                    <strong>Márcio Maestrello</strong> é graduado em Análise de Sistemas pela Pontifícia Universidade
                    Católica de Campinas, pós-graduado em Redes de Computadores pela Universidade São Judas Tadeu (SP) e
                    em Docência Nível Superior pelo Centro Universitário Nossa Senhora do Patrocínio (Itu/SP).
                  </p>
                  <p>
                    Com <strong>mais de 30 anos</strong> atuando como administrador de redes, sistemas, segurança e
                    gestor de TI, passou por diversas empresas multinacionais e de serviços, acumulando vasta
                    experiência prática no mercado corporativo.
                  </p>
                  <p>
                    No meio acadêmico, possui <strong>mais de 20 anos de experiência</strong>, lecionando disciplinas de
                    Gestão e Governança de TI, Redes de Computadores, Gestão de Projetos, Segurança da Informação, entre
                    outras, em diversas universidades públicas e privadas.
                  </p>
                  <p className="hidden md:block">
                    Além da atuação corporativa e acadêmica, colabora regularmente com textos e palestras sobre
                    inovação, tecnologia e sociedade para jornais, revistas, entidades e portais na Internet, sendo
                    reconhecido como uma referência no setor de TI.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3">
                    Credenciais Acadêmicas:
                  </h3>
                  <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Graduação em Análise de Sistemas - PUC Campinas</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Pós-graduação em Redes de Computadores - Universidade São Judas Tadeu</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Pós-graduação em Docência Nível Superior - CEUNSP</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>+30 anos de experiência corporativa em TI</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>+20 anos de experiência acadêmica</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                O que os Leitores Estão Dizendo
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Profissionais que transformaram suas carreiras com este livro
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-1 mb-3 md:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    "Este livro mudou completamente minha visão sobre gestão de TI. As estratégias apresentadas me
                    ajudaram a conseguir uma promoção para Gerente de TI em apenas 6 meses."
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 text-sm md:text-base">Ana Silva</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-1 mb-3 md:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    "Conteúdo extremamente prático e aplicável. Implementei várias das metodologias em minha empresa e
                    os resultados foram impressionantes. Recomendo para todos os profissionais de TI."
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 text-sm md:text-base">Carlos Santos</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-1 mb-3 md:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    "Como estudante de Sistemas de Informação, este livro me deu uma visão completa do mercado. Consegui
                    meu primeiro estágio aplicando os conceitos aprendidos na entrevista."
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 text-sm md:text-base">Maria Oliveira</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-1 mb-3 md:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    "Excelente abordagem sobre governança de TI. O autor consegue explicar conceitos complexos de forma
                    clara e objetiva. Já indiquei para toda minha equipe."
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 text-sm md:text-base">Roberto Lima</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Principal */}
      <section className="py-12 md:py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              Transforme sua Carreira Hoje Mesmo
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">
              Junte-se a mais de 2.500 profissionais que já estão aplicando essas estratégias e conquistando posições de
              liderança em TI.
            </p>

            <div className="flex flex-col gap-3 md:gap-4 justify-center mb-6 md:mb-8">
              <Link
                href="https://loja.uiclap.com/titulo/ua97524/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackPurchase}
              >
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-white text-blue-600 hover:bg-gray-100 text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                >
                  <ShoppingCart className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Comprar Versão Impressa - R$ 97,43
                </Button>
              </Link>
              <Link
                href="https://www.amazon.com.br/dp/B0F9VQJGK2"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackEbookPurchase}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full md:w-auto border-white text-white hover:bg-white hover:text-blue-600 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Comprar E-book - Amazon
                </Button>
              </Link>
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppLead}>
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                >
                  <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  QUERO MEU DESCONTO VIA WHATSAPP
                </Button>
              </Link>
            </div>

            <div className="text-blue-100 text-xs md:text-sm">
              <p>✅ Entrega imediata do e-book | ✅ Garantia de 30 dias</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="space-y-3 md:space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
                <span className="text-base md:text-lg font-bold">Márcio Maestrello</span>
              </div>
              <p className="text-sm md:text-base text-gray-400">
                Especialista em Gestão e Governança de TI, ajudando profissionais a transformarem suas carreiras.
              </p>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-3 md:mb-4">Links Rápidos</h4>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-400">
                <li>
                  <Link href="#sobre-livro" className="hover:text-white">
                    Sobre o Livro
                  </Link>
                </li>
                <li>
                  <Link href="#autor" className="hover:text-white">
                    Sobre o Autor
                  </Link>
                </li>
                <li>
                  <Link href="#depoimentos" className="hover:text-white">
                    Depoimentos
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-3 md:mb-4">Contato</h4>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-400">
                <li>Marcio.Maestrello@terra.com.br</li>
                <li>11 99260-5960</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-3 md:mb-4">Informações</h4>
              <p className="text-sm md:text-base text-gray-400">Livro disponível em formato físico e digital</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-sm md:text-base text-gray-400">
            <p>&copy; {new Date().getFullYear()} Márcio Maestrello. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
