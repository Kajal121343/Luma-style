function HelpPage() {
  const faqs = [
    { q: "How can I contact customer support?", a: "You can reach us at support@lumastyle.com or call +0123 456 789 for assistance." },
    { q: "What payment methods are accepted?", a: "We accept Credit/Debit Cards, UPI, Net Banking, PayPal, and Cash on Delivery." },
    { q: "How do I add products to my cart?", a: "Click the Add to Cart button on any product or product details page. You can view all cart items from the Cart icon in the header." },
    { q: "Can I remove or update items in my cart?", a: "Go to your Cart page, click + / - to change quantity or Remove to delete an item. Total price updates automatically." },
    { q: "How can I save products to my Wishlist?", a: "Click the heart icon on any product to add it to your Wishlist. View and manage all wishlist items from the Wishlist icon in the header." },
    { q: "How long does delivery take?", a: "Delivery usually takes 3–7 business days, depending on your location and shipping option selected." },
    { q: "Are there any offers or discounts?", a: "We regularly provide discounts and special offers. Check the Offers section or product pages for details." },
    { q: "Can I track my order?", a: "After placing an order, you can track it from My Orders in your account section." },
    { q: "Is my payment secure?", a: "We use SSL encryption and secure payment gateways to ensure your transactions are safe." },
    { q: "Can I return or exchange products?", a: "You can request a return or exchange within 7 days of delivery following our return policy." },
  ];

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Help / FAQ</h1>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border p-4 rounded hover:shadow">
            <h3 className="font-semibold">{faq.q}</h3>
            <p className="mt-1 text-gray-600">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HelpPage;
