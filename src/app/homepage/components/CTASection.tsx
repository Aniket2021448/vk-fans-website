import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-linear-to-br from-primary via-primary/95 to-industrial-steel relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Experience Manufacturing Excellence?
            </h2>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Get a custom quote for your specific needs or explore our full product catalog. Our engineering team is ready to help you find the perfect solution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/product-catalog"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-industrial"
              >
                <Icon name="ShoppingCartIcon" size={20} className="mr-2" />
                Browse Products
              </Link>
              <Link
                href="/product-catalog"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-colors"
              >
                <Icon name="DocumentTextIcon" size={20} className="mr-2" />
                Request Quote
              </Link>
            </div>
          </div>

          {/* Right: Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Icon name="TruckIcon" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-200">
                Direct from factory to your location with expedited shipping options
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Icon name="ShieldCheckIcon" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">5-Year Warranty</h3>
              <p className="text-sm text-gray-200">
                Comprehensive coverage backed by our manufacturing confidence
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Icon name="ChatBubbleLeftRightIcon" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Expert Support</h3>
              <p className="text-sm text-gray-200">
                Direct access to our engineering team for technical assistance
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Icon name="CurrencyDollarIcon" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Best Value</h3>
              <p className="text-sm text-gray-200">
                Factory-direct pricing without middleman markups
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;