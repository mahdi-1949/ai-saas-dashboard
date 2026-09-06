export default function Pricing() {
  const plans = [
    { name: 'Starter', price: '$19', features: ['AI tools', 'Basic analytics'] },
    { name: 'Professional', price: '$49', features: ['Advanced AI', 'Team workspace', 'Analytics'] },
    { name: 'Enterprise', price: '$99', features: ['Unlimited access', 'Priority support'] },
  ];

  return (
    <section className="py-24">
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className="rounded-2xl border p-8">
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <p className="my-4 text-4xl font-bold">{plan.price}</p>
            <ul className="space-y-2 text-gray-400">
              {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
