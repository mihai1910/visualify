
import { ArrowRight, Brain, Cpu, Network, Sparkles } from 'lucide-react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ConceptCard from '@/components/ConceptCard';
import AIVisualizer from '@/components/AIVisualizer';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const concepts = [
    {
      title: 'Neural Networks',
      description: 'Understand how artificial neural networks mimic the human brain to learn patterns and make decisions.',
      icon: <Brain />,
      color: '#4896ef',
      link: '/concepts#neural-networks'
    },
    {
      title: 'Machine Learning',
      description: 'Explore how algorithms improve through experience and the different approaches to machine learning.',
      icon: <Cpu />,
      color: '#9d50ff',
      link: '/concepts#machine-learning'
    },
    {
      title: 'Deep Learning',
      description: 'Dive into the multi-layered neural networks that enable computers to learn from vast amounts of data.',
      icon: <Network />,
      color: '#50c9ff',
      link: '/concepts#deep-learning'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Concepts Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore AI Concepts</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Interactive visualizations that make complex AI topics easier to understand
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {concepts.map((concept, index) => (
                <ConceptCard
                  key={index}
                  title={concept.title}
                  description={concept.description}
                  icon={concept.icon}
                  color={concept.color}
                  link={concept.link}
                />
              ))}
            </div>
            
            <div className="text-center">
              <NavLink 
                to="/concepts"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-all font-medium"
              >
                View All Concepts
                <ArrowRight className="w-4 h-4" />
              </NavLink>
            </div>
          </div>
        </section>
        
        {/* Interactive Visual Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <AIVisualizer type="connections" className="opacity-20" />
          </div>
          
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2 order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Learn Through Interactive Visuals
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our interactive visualizations bring abstract AI concepts to life, making them tangible and easier to understand. Explore neural networks, algorithms, and machine learning processes through dynamic visual representations.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-3 h-3 text-primary" />
                    </div>
                    <span>Interactive models that respond to your input</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-3 h-3 text-primary" />
                    </div>
                    <span>Visual explanations of complex algorithms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-3 h-3 text-primary" />
                    </div>
                    <span>Step-by-step animated learning processes</span>
                  </li>
                </ul>
                <NavLink 
                  to="/concepts"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium"
                >
                  Explore Visualizations
                  <ArrowRight className="w-4 h-4" />
                </NavLink>
              </div>
              
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="aspect-video rounded-xl overflow-hidden border border-border shadow-xl">
                  <AIVisualizer type="neural-network" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
