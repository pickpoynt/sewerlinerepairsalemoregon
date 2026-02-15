import { Wrench, Droplet, Thermometer, Shield, Clock, Award, MapPin, Phone, Zap } from "lucide-react";

const QueensPlumbingInfo = () => {
    return (
        <section id="queens-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Zap className="w-4 h-4" />
                            <span>24/7 Emergency Service</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Rapid <span className="text-red-600">Emergency Plumbing</span> in Queens, NY
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            When a pipe bursts in Astoria or a sewer backs up in Flushing, you can't wait. Our Queens emergency team provides immediate response to protect your New York property.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column - Priority Response */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <Clock className="w-7 h-7 text-red-600" />
                                    Why Queens Calls Us First
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                                            <Zap className="w-5 h-5 text-red-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Instant Dispatch</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We have units strategically stationed throughout Queens, from Long Island City to Bayside, ensuring we reach your doorstep faster than anyone else.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                                            <Shield className="w-5 h-5 text-red-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Vertical Infrastructure Experts</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Whether it's a high-rise apartment or a historic Queens row house, we understand the complex plumbing configurations unique to NYC's largest borough.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                                            <Droplet className="w-5 h-5 text-red-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Flooding Mitigation</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Water damage doesn't wait. Our team arrives equipped with industrial pumping and drying technology to minimize structural damage immediately.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Local Borough Expertise */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <MapPin className="w-7 h-7 text-red-600" />
                                    Our Queens Service Reach
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    We provide 24/7 coverage to every corner of Queens, including:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Astoria & Long Island City",
                                        "Flushing & Whitestone",
                                        "Forest Hills & Rego Park",
                                        "Jamaica & Hollis",
                                        "Jackson Heights & Corona",
                                        "Bayside & Little Neck",
                                        "Ridgewood & Maspeth",
                                        "The Rockaways"
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-red-500" />
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* NYC Specific Warning Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight flex items-center gap-3">
                                    NYC Code Compliant
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic">
                                    New York City plumbing systems are under strict municipal codes. Our Queens master plumbers are fully licensed and insured, ensuring that every emergency repair meets FDNY and NYC Department of Buildings standards. Don't risk your property or insurance with unlicensed labor.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Master Licensed</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">NYC DOB Certified</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Insured & Bonded</div>
                                </div>
                            </div>
                            <div className="bg-red-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform">
                                <p className="text-red-100 text-sm font-bold uppercase tracking-widest mb-2">Emergency Hotline</p>
                                <a href="tel:8777921410" className="text-4xl font-bold transition-colors block mb-4">
                                    (877) 792-1410
                                </a>
                                <p className="text-red-100 text-sm italic">
                                    Live Dispatchers Standing By 24/7
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QueensPlumbingInfo;
