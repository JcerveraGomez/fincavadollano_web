import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Heart, Users, Target, Sparkles, ArrowRight, Globe, Coffee, Lightbulb } from "lucide-react";
import LayoutStore from "../../layout/layoutStore";
import { useTranslation } from "react-i18next";

// Animaciones
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

export function AboutPage() {
  const { t } = useTranslation();
  
  return (
    <LayoutStore>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        
        {/* Hero Section */}
        <section className="relative px-4 py-20 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                {t('About Us')}
              </Badge>
            </motion.div>
            
            <motion.h1
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6"
            >
              {t('We Create')}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {t('Extraordinary')} </span>
              {t('Experiences')}
            </motion.h1>
            
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris.
            </motion.p>
          </motion.div>
        </section>

        {/* Stats Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="px-4 py-16 mx-auto max-w-7xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: t('Happy Customers'), icon: Users },
              { number: "99%", label: t('Satisfaction'), icon: Heart },
              { number: "24/7", label: t('Support'), icon: Coffee },
              { number: "5★", label: t('Rating'), icon: Target }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex p-4 mb-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl group-hover:shadow-lg transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="px-4 py-20 mx-auto max-w-7xl"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="mb-4">
                <Target className="w-4 h-4 mr-2" />
                {t('Our Mission')}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {t('We Transform Ideas into')} 
                <span className="text-blue-600"> {t('Realities')}</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <motion.div whileHover={{ x: 10 }} className="inline-flex">
                <Button size="lg" className="group">
                  {t('Learn More')}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative z-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-12 text-white shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl backdrop-blur-sm"></div>
                <div className="relative z-10">
                  <Globe className="w-16 h-16 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4">{t('Global Vision')}</h3>
                  <p className="text-white/90 leading-relaxed">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="px-4 py-20 mx-auto max-w-7xl bg-gradient-to-r from-gray-50/50 to-blue-50/50 rounded-3xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Heart className="w-4 h-4 mr-2" />
              {t('Our Values')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('What')} 
              <span className="text-purple-600"> {t('Drives Us')}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: t('Innovation'),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: Users,
                title: t('Collaboration'),
                description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
                color: "from-blue-400 to-purple-500"
              },
              {
                icon: Target,
                title: t('Excellence'),
                description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
                color: "from-green-400 to-blue-500"
              }
            ].map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      {...scaleOnHover}
                      className={`inline-flex p-4 mb-6 bg-gradient-to-r ${value.color} rounded-2xl shadow-lg`}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="px-4 py-20 mx-auto max-w-7xl text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"
            />
            
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                ¿Listo para comenzar?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button size="lg" variant="secondary" className="px-8 py-3 text-lg group">
                  Contáctanos
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Ver Proyectos
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </LayoutStore>
  );
}
