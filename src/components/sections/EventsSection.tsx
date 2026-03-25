const EventsSection = () => {
  const events = [
    {
      name: "VivaTech 2025",
      location: "Paris, France",
      year: "2025",
    },
  ];

  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-pixel text-2xl md:text-3xl mb-10">Events</h2>

        <div className="space-y-4">
          {events.map((event, i) => (
            <div key={i} className="border-l-2 border-primary pl-5 py-2">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
                <div>
                  <h3 className="font-body font-semibold">{event.name}</h3>
                  <p className="font-retro text-lg text-muted-foreground">{event.location}</p>
                </div>
                <p className="font-retro text-lg text-primary shrink-0">{event.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
