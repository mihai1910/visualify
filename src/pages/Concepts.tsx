
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, ChevronRight, Cpu, FileLock2, Network, Puzzle, Search, Sparkles, Wand2 } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConceptCard from '@/components/ConceptCard';
import AIVisualizer from '@/components/AIVisualizer';

const Concepts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aiConcepts = [
    {
      title: 'Neural Networks',
      description: 'Understand how artificial neural networks mimic the human brain to learn patterns and make decisions.',
      icon: <Brain />,
      color: '#4896ef',
      link: '#neural-networks'
    },
    {
      title: 'Machine Learning',
      description: 'Explore how algorithms improve through experience and the different approaches to machine learning.',
      icon: <Cpu />,
      color: '#9d50ff',
      link: '#machine-learning'
    },
    {
      title: 'Deep Learning',
      description: 'Dive into the multi-layered neural networks that enable computers to learn from vast amounts of data.',
      icon: <Network />,
      color: '#50c9ff',
      link: '#deep-learning'
    },
    {
      title: 'Computer Vision',
      description: 'Learn how AI systems interpret and understand visual information from the world.',
      icon: <Search />,
      color: '#ff6b6b',
      link: '#computer-vision'
    },
    {
      title: 'Natural Language Processing',
      description: 'Discover how AI understands, interprets, and generates human language.',
      icon: <Wand2 />,
      color: '#4cd964',
      link: '#nlp'
    },
    {
      title: 'Reinforcement Learning',
      description: 'See how AI agents learn to make decisions by taking actions and receiving rewards.',
      icon: <Puzzle />,
      color: '#ffcc00',
      link: '#reinforcement-learning'
    }
  ];

  const architectures = [
    {
      name: 'Convolutional Neural Networks (CNNs)',
      description: 'Specialized for processing grid-like data such as images.',
      color: '#4896ef'
    },
    {
      name: 'Recurrent Neural Networks (RNNs)',
      description: 'Designed for sequential data with memory capabilities.',
      color: '#9d50ff'
    },
    {
      name: 'Transformers',
      description: 'Attention-based architecture powering modern language models.',
      color: '#ff6b6b'
    },
    {
      name: 'Generative Adversarial Networks (GANs)',
      description: 'Two networks competing to create realistic content.',
      color: '#4cd964'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 relative bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Concepts Visualized</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Explore artificial intelligence concepts through interactive visualizations that make complex topics approachable and intuitive.
              </p>
              <div className="flex justify-center">
                <a 
                  href="#all-concepts"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium"
                >
                  Browse Concepts
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* All Concepts Section */}
        <section id="all-concepts" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key AI Concepts</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each concept includes interactive visualizations and clear explanations
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {aiConcepts.map((concept, index) => (
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
          </div>
        </section>
        
        {/* Neural Networks Section */}
        <section id="neural-networks" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4896ef]/10 mb-6">
                    <Brain className="w-4 h-4 text-[#4896ef]" />
                    <span className="text-sm font-medium text-[#4896ef]">Neural Networks</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Understanding Neural Networks
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Neural networks are computing systems inspired by the biological neural networks in human brains. They consist of artificial neurons that process and transmit signals, allowing the network to learn and adapt.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    These networks excel at recognizing patterns, classifying data, and making predictions based on examples they've seen before.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#4896ef]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Sparkles className="w-3 h-3 text-[#4896ef]" />
                      </div>
                      <div>
                        <strong className="block text-foreground">Input Layer</strong>
                        <span className="text-sm text-muted-foreground">Receives initial data for processing</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#4896ef]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Sparkles className="w-3 h-3 text-[#4896ef]" />
                      </div>
                      <div>
                        <strong className="block text-foreground">Hidden Layers</strong>
                        <span className="text-sm text-muted-foreground">Process and transform data through weighted connections</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#4896ef]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Sparkles className="w-3 h-3 text-[#4896ef]" />
                      </div>
                      <div>
                        <strong className="block text-foreground">Output Layer</strong>
                        <span className="text-sm text-muted-foreground">Provides final results or predictions</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="aspect-square max-w-md mx-auto rounded-xl overflow-hidden border border-border shadow-xl bg-white"
                >
                  <AIVisualizer type="neural-network" />
                </motion.div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold mb-6">Neural Network Architectures</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {architectures.map((arch, index) => (
                  <div 
                    key={index}
                    className="p-6 rounded-xl glass-card border border-border"
                  >
                    <h4 className="text-xl font-semibold mb-3" style={{ color: arch.color }}>{arch.name}</h4>
                    <p className="text-muted-foreground">{arch.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Machine Learning Section */}
        <section id="machine-learning" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 order-2 md:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="aspect-square max-w-md mx-auto rounded-xl overflow-hidden border border-border shadow-xl bg-white"
                >
                  <AIVisualizer type="particles" />
                </motion.div>
              </div>
              
              <div className="md:w-1/2 order-1 md:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9d50ff]/10 mb-6">
                    <Cpu className="w-4 h-4 text-[#9d50ff]" />
                    <span className="text-sm font-medium text-[#9d50ff]">Machine Learning</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Machine Learning Fundamentals
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Machine learning is a subset of AI that enables systems to learn and improve from experience without explicit programming. It focuses on developing algorithms that can access data and use it to learn for themselves.
                  </p>
                  <div className="space-y-6 mb-8">
                    <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                      <h4 className="font-medium mb-2">Supervised Learning</h4>
                      <p className="text-sm text-muted-foreground">Models learn from labeled training data to make predictions or decisions.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                      <h4 className="font-medium mb-2">Unsupervised Learning</h4>
                      <p className="text-sm text-muted-foreground">Models find patterns or structure in unlabeled data.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                      <h4 className="font-medium mb-2">Reinforcement Learning</h4>
                      <p className="text-sm text-muted-foreground">Models learn optimal actions through trial and error to maximize rewards.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Deep Learning Section */}
        <section id="deep-learning" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#50c9ff]/10 mb-6">
                <Network className="w-4 h-4 text-[#50c9ff]" />
                <span className="text-sm font-medium text-[#50c9ff]">Deep Learning</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Exploring Deep Learning
              </h2>
              <p className="text-muted-foreground">
                Deep learning is a subset of machine learning that uses multi-layered neural networks to analyze various factors of data. It mimics the way humans gain certain types of knowledge, with multiple layers of increasing complexity.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-80 md:h-96 mb-16 rounded-xl overflow-hidden border border-border shadow-xl"
            >
              <AIVisualizer type="connections" />
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl glass-card"
              >
                <h3 className="text-xl font-bold mb-4">Feature Extraction</h3>
                <p className="text-muted-foreground">
                  Deep learning automatically discovers the representations needed for feature detection or classification from raw data, eliminating the need for manual feature extraction.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl glass-card"
              >
                <h3 className="text-xl font-bold mb-4">Multiple Layers</h3>
                <p className="text-muted-foreground">
                  Deep neural networks contain many layers between input and output, allowing them to model complex non-linear relationships and hierarchical concepts.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl glass-card"
              >
                <h3 className="text-xl font-bold mb-4">Applications</h3>
                <p className="text-muted-foreground">
                  Deep learning powers many modern AI applications, including image and speech recognition, natural language processing, and game playing systems.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* More Content CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <FileLock2 className="w-12 h-12 mx-auto text-primary mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                More Concepts Coming Soon
              </h2>
              <p className="text-muted-foreground mb-8">
                We're continuously adding new AI concepts and visualizations to help you understand the fascinating world of artificial intelligence.
              </p>
              <a 
                href="#all-concepts"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium"
              >
                Browse Available Concepts
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Concepts;
