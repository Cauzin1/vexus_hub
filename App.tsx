import React, { useState } from 'react';
import { VortexAnimation } from './components/VortexAnimation';
import { FinalCTAForm } from './components/FinalCTAForm';
import { 
  VexusLogo, 
  WhatsappIcon, 
  CrmIcon, 
  EmailIcon, 
  ArrowRightIcon, 
  CheckIcon, 
  AbcommIcon,
  LinkedInIcon,
  InstagramIcon,
  ChatbotIcon,
  AutomationIcon,
  AnalyticsIcon
} from './components/Icons';

// Reusable Section Wrapper
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => (
  <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}>
    <div className="container mx-auto max-w-6xl">
      {children}
    </div>
  </section>
);

// --- SEÇÕES --- //

const HeroSection: React.FC = () => (
  <div id="home" className="relative flex items-center justify-center min-h-screen text-center text-white px-4">
    <VortexAnimation />
    <div className="relative z-10 flex flex-col items-center">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-['Russo_One'] uppercase tracking-wider leading-tight">
        SEUS DADOS DISPERSOS GANHAM UM <span className="text-[#6E3AFF]">NÚCLEO</span>.<br/>SUAS VENDAS, UM <span className="text-[#6E3AFF]">TURBO</span>.
      </h1>
      <p className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-300">
        Plataforma completa para chatbots com IA generativa + automação de marketing contextual.
      </p>
      <a href="#beta-access" className="mt-10 inline-block bg-[#6E3AFF] hover:bg-purple-600 text-white font-bold py-4 px-10 rounded-lg text-lg uppercase tracking-widest transition-transform duration-300 transform hover:scale-105">
       Testar VEX.AI (Beta Aberto)
      </a>
    </div>
  </div>
);

const ProblemSection: React.FC = () => (
  <Section id="problem" className="bg-[#0f0f1e]">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="text-center md:text-left">
        <h2 className="text-3xl lg:text-4xl font-['Russo_One'] uppercase">Sistemas Fragmentados = <br/><span className="text-[#6E3AFF]">Caos operacional</span></h2>
        <p className="mt-4 text-lg text-gray-400">
        Quando suas ferramentas não se comunicam, oportunidades são perdidas. Os dados permanecem isolados, as experiências dos clientes são prejudicadas e os pipelines de vendas perdem potencial.        
        </p>
        <div className="mt-8 bg-[#1a1a2e] border border-gray-700 rounded-lg p-6">
          <p className="text-4xl lg:text-5xl font-bold text-center text-[#00FFC1]">74%</p>
          <p className="mt-2 text-center text-gray-300">das empresas perdem vendas devido à desconexão entre dados e ações.</p>
        </div>
      </div>
      <div className="relative h-80 flex items-center justify-center">
        <div className="w-full h-full max-w-md bg-black bg-opacity-30 rounded-2xl border-2 border-dashed border-gray-700 flex items-center justify-center p-4">
          <p className="text-gray-600 font-semibold text-lg">DashBoard quebrado</p>
        </div>
        <div className="absolute -top-4 -left-4 animate-float" style={{ animationDelay: '0s' }}>
          <WhatsappIcon className="w-16 h-16 text-[#25D366]" />
        </div>
        <div className="absolute top-10 -right-8 animate-float" style={{ animationDelay: '1s' }}>
          <CrmIcon className="w-20 h-20 text-[#FF9A8B]" />
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '2s' }}>
          <EmailIcon className="w-16 h-16 text-[#4285F4]" />
        </div>
      </div>
    </div>
  </Section>
);

const SolutionSection: React.FC = () => (
  <Section id="solution">
    <div className="text-center">
      <h2 className="text-3xl lg:text-4xl font-['Russo_One'] uppercase">O <span className="text-[#00FFC1]">Núcleo</span> que Unifica<br/> Inteligência e Ação</h2>
      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        <div className="flex-shrink-0">
          <VexusLogo className="h-20 w-20 text-[#6E3AFF]" />
        </div>
        <ArrowRightIcon className="h-12 w-12 text-gray-600 rotate-90 md:rotate-0" />
        <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0 text-left">
            <div className="bg-[#1a1a2e] p-6 rounded-lg border border-gray-700 flex items-center gap-4">
              <ChatbotIcon className="h-10 w-10 text-[#6E3AFF]"/> 
              <div>
                <h3 className="font-bold text-lg text-white">Chatbot com IA</h3>
                <p className="text-gray-400 text-sm">Conversas que convertem</p>
              </div>
            </div>
            <div className="bg-[#1a1a2e] p-6 rounded-lg border border-gray-700 flex items-center gap-4">
              <AutomationIcon className="h-10 w-10 text-[#6E3AFF]"/> 
              <div>
                <h3 className="font-bold text-lg text-white">Automação Multicanal</h3>
                <p className="text-gray-400 text-sm">Engajamento em todos os lugares</p>
              </div>
            </div>
            <div className="bg-[#1a1a2e] p-6 rounded-lg border border-gray-700 flex items-center gap-4">
              <AnalyticsIcon className="h-10 w-10 text-[#6E3AFF]"/>
              <div>
                <h3 className="font-bold text-lg text-white">Análise Preditiva</h3>
                <p className="text-gray-400 text-sm">Aja antes de perguntarem</p>
              </div>
            </div>
        </div>
      </div>
      <p className="mt-12 text-xl text-gray-300 max-w-3xl mx-auto">"De fluxos de atendimento ao cliente a campanhas direcionadas: <span className="font-semibold text-[#00FFC1]">tudo em um só lugar.</span>"</p>
    </div>
  </Section>
);

const TechnologySection: React.FC = () => {
  const tabs = [
    { name: 'CHATBOT VEXUS', content: [
      'IA com memória contextual (lembra até 12 interações)',
      'Entende intenções, não apenas palavras-chave, para conversas mais humanas',
      'Integração nativa: Meta (WhatsApp, Instagram), Google e principais CRMs',
      'Gera vendas 24/7, até enquanto você dorme.'
    ]},
    { name: 'MOTOR DE MARKETING', content: [
      'Crie jornadas personalizadas diretamente no fluxo do chatbot',
      'Hiperpersonalização com gatilhos de dados em tempo real',
      'Segmentação de públicos com base no comportamento, não apenas dados demográficos',
      'Aumente o engajamento com mensagens perfeitamente cronometradas e relevantes.'
    ]}
  ];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section id="tech" className="bg-[#0f0f1e]">
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-['Russo_One'] uppercase">Construído para Resultados</h2>
        <p className="mt-2 text-lg text-gray-400">A tecnologia que impulsiona seu crescimento.</p>
      </div>
      <div className="mt-10 max-w-3xl mx-auto">
        <div className="flex border-b border-gray-700">
          {tabs.map((tab, index) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(index)}
              className={`py-4 px-6 block font-medium text-lg focus:outline-none transition-colors duration-300
                ${activeTab === index 
                  ? 'border-b-2 border-[#00FFC1] text-[#00FFC1]' 
                  : 'text-gray-400 hover:text-white'
                }`
              }
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="mt-8">
          <ul className="space-y-4">
            {tabs[activeTab].content.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="h-6 w-6 text-[#00FFC1] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg p-6 text-center transform hover:scale-105 hover:border-[#6E3AFF] transition-all duration-300">
    <p className="text-4xl lg:text-5xl font-bold text-[#00FFC1]">{value}</p>
    <p className="mt-2 text-gray-400 uppercase tracking-wider text-sm">{label}</p>
  </div>
);

const SuccessStorySection: React.FC = () => (
  <Section id="success">
    <div className="text-center">
      <h2 className="text-3xl lg:text-4xl font-['Russo_One'] uppercase">E-commerce Reduz o Custo/Ticket em <span className="text-[#6E3AFF]">70%</span> com o VEXUS</h2>
      <p className="mt-2 text-lg text-gray-400">Resultados reais de um dos maiores varejistas online.</p>
    </div>
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <StatCard value="+189%" label="Engajamento" />
      <StatCard value="9.8" label="NPS" />
      <StatCard value="8s" label="Tempo de Resposta" />
    </div>
    <div className="mt-12 flex justify-center">
      <div className="flex items-center gap-4 bg-gray-800 border border-gray-700 px-6 py-3 rounded-full">
        <AbcommIcon className="h-8 w-8 text-[#00FFC1]" />
        <span className="font-semibold text-white">Recomendado pela ABComm</span>
      </div>
    </div>
  </Section>
);

const FinalCTASection: React.FC = () => (
  <Section id="beta-access" className="relative bg-gradient-to-b from-[#0f0f1e] to-[#0A0A16]">
    <div className="relative z-10 text-center max-w-2xl mx-auto">
      <h2 className="text-3xl lg:text-4xl font-['Russo_One'] uppercase">Sua Revolução Conversacional<br/> Começa Agora</h2>
      <p className="mt-4 text-lg text-gray-400">Seja um dos primeiros a experimentar o poder unificado do VEXUS. Ganhe acesso gratuito ao beta e um código exclusivo para compartilhar.</p>
      <div className="mt-10">
        <FinalCTAForm />
      </div>
    </div>
  </Section>
);

const Footer: React.FC = () => (
  <footer className="bg-[#0A0A16] border-t border-gray-800 text-gray-400">
    <div className="container mx-auto max-w-6xl py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-center md:text-left">
        <VexusLogo className="h-10 w-10 mx-auto md:mx-0 text-white" />
        <p className="mt-2 text-sm">O núcleo da transformação digital</p>
      </div>
      <div className="flex gap-6">
        <a href="#" className="hover:text-[#00FFC1] transition-colors">Blog</a>
        <a href="#" className="hover:text-[#00FFC1] transition-colors">Estudos de Caso</a>
        <a href="#" className="hover:text-[#00FFC1] transition-colors">Contato</a>
      </div>
      <div className="flex gap-5">
        <a href="#" aria-label="LinkedIn" className="hover:text-[#6E3AFF] transition-colors"><LinkedInIcon className="h-6 w-6" /></a>
        <a href="#" aria-label="Instagram" className="hover:text-[#6E3AFF] transition-colors"><InstagramIcon className="h-6 w-6" /></a>
      </div>
    </div>
  </footer>
);

// --- APP PRINCIPAL --- //

const App: React.FC = () => {
  return (
    <div className="bg-[#0A0A16] text-gray-200 font-['Inter']">
      <HeroSection />
      <main>
        <ProblemSection />
        <SolutionSection />
        <TechnologySection />
        <SuccessStorySection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
