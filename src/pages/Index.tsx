
import { ArrowRight, Battery, CircuitBoard, Plug, Zap, Lightbulb, Sparkles } from 'lucide-react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ConceptCard from '@/components/ConceptCard';
import ElectricalVisualizer from '@/components/ElectricalVisualizer';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const concepts = [
    {
      title: 'Circuits',
      description: 'Understand how electrical circuits work, from simple to complex, and how electrons flow through them.',
      icon: <CircuitBoard />,
      color: '#4896ef',
      link: '/concepts#circuits'
    },
    {
      title: 'Voltage & Current',
      description: 'Explore the relationship between voltage, current, and resistance in electrical systems.',
      icon: <Zap />,
      color: '#9d50ff',
      link: '/concepts#voltage-current'
    },
    {
      title: 'Components',
      description: 'Learn about resistors, capacitors, inductors, and other electrical components that make up circuits.',
      icon: <Plug />,
      color: '#50c9ff',
      link: '/concepts#components'
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Electricity Concepts</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Interactive visualizations that make complex electrical topics easier to understand
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
            <ElectricalVisualizer type="electrons" className="opacity-20" />
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
                  Our interactive visualizations bring abstract electrical concepts to life, making them tangible and easier to understand. Explore circuits, electrons, current flow, and components through dynamic visual representations.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-3 h-3 text-primary" />
                    </div>
                    <span>Interactive circuit models that respond to your input</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-3 h-3 text-primary" />
                    </div>
                    <span>Visual explanations of electricity behavior</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-3 h-3 text-primary" />
                    </div>
                    <span>Step-by-step animated current flow demonstrations</span>
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
                  <ElectricalVisualizer type="circuit" />
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
