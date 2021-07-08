export default function Intro({
  generalSettingsTitle,
  generalSettingsDescription,
}) {
  return (
    <section className="flex-col md:flex-column flex md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        {generalSettingsTitle}
      </h1>
      <h3>{generalSettingsDescription}</h3>
    </section>
  );
}
