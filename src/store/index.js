import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects:   [
      // {
      //   id: 1,
      //   slug: 'fhn-tehlukesizlik-qurasdirilmasi',
      //   title: 'FHN sistem',
      //   description: 'Description text here',
      //   client: 'FHN flan korpusu',
      //   mainImage: '',
      //   images: [
      //     '@/assets/images/backr'
      //   ]
      // },
      {
        id: 1,
        title: 'Ağdaş rayonundan',
        description: 'Description text here',
        images: [
          require('@/assets/projects/agdash/agdash-5.jpg'),
          require('@/assets/projects/agdash/agdash-2.jpg'),
          require('@/assets/projects/agdash/agdash-3.jpg'),
          require('@/assets/projects/agdash/agdash-4.jpg'),
          require('@/assets/projects/agdash/agdash-1.jpg'),
        ]
      },
      {
        id: 2,
        title: 'Milli Arxiv Idarəsindən',
        description: 'Description text here',
        images: [
          require('@/assets/projects/milli-arxiv/arxiv-1.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-2.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-3.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-4.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-5.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-6.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-7.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-8.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-9.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-10.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-11.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-12.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-13.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-14.jpg'),
        ]
      },
      {
        id: 3,
        title: 'Altes',
        description: 'Description text here',
        images: [
          require('@/assets/projects/altes/altes-1.jpg'),
          require('@/assets/projects/altes/altes-2.jpg'),
          require('@/assets/projects/altes/altes-3.jpg'),
          require('@/assets/projects/altes/altes-4.jpg'),
          require('@/assets/projects/altes/altes-5.jpg'),
          require('@/assets/projects/altes/altes-6.jpg'),
          require('@/assets/projects/altes/altes-7.jpg'),
          require('@/assets/projects/altes/altes-8.jpg'),
          require('@/assets/projects/altes/altes-9.jpg'),
          require('@/assets/projects/altes/altes-10.jpg'),
          require('@/assets/projects/altes/altes-11.jpg'),
          require('@/assets/projects/altes/altes-12.jpg'),
          require('@/assets/projects/altes/altes-13.jpg'),
        ]
      },
      {
        id: 4,
        title: 'Elmed',
        description: 'Description text here',
        images: [
          require('@/assets/projects/elmed/elmed-1.jpg'),
          require('@/assets/projects/elmed/elmed-2.jpg'),
          require('@/assets/projects/elmed/elmed-3.jpg'),
          require('@/assets/projects/elmed/elmed-4.jpg'),
          require('@/assets/projects/elmed/elmed-5.jpg'),
          require('@/assets/projects/elmed/elmed-6.jpg'),
          require('@/assets/projects/elmed/elmed-7.jpg'),
          require('@/assets/projects/elmed/elmed-8.jpg'),
          require('@/assets/projects/elmed/elmed-9.jpg'),
          require('@/assets/projects/elmed/elmed-10.jpg'),
          require('@/assets/projects/elmed/elmed-11.jpg'),
          require('@/assets/projects/elmed/elmed-12.jpg'),
          require('@/assets/projects/elmed/elmed-13.jpg'),
        ]
      },
      {
        id: 5,
        title: 'Prokuratura',
        description: 'Description text here',
        images: [
          require('@/assets/projects/prokuratura/prokuratura-1.jpg'),
          require('@/assets/projects/prokuratura/prokuratura-2.jpg'),
          require('@/assets/projects/prokuratura/prokuratura-3.jpg'),
          require('@/assets/projects/prokuratura/prokuratura-4.jpg'),
          require('@/assets/projects/prokuratura/prokuratura-5.jpg'),
          require('@/assets/projects/prokuratura/prokuratura-6.jpg'),
          require('@/assets/projects/prokuratura/prokuratura-7.jpg'),
          require('@/assets/projects/prokuratura/prokuratura-8.jpg'),
          require('@/assets/projects/prokuratura/prokuratura-9.jpg'),
          require('@/assets/projects/prokuratura/prokuratura-10.jpg'),
          require('@/assets/projects/prokuratura/prokuratura-11.jpg'),
          require('@/assets/projects/prokuratura/prokuratura-12.jpg'),
        ]
      },
      {
        id: 6,
        title: 'Ticarət mərkəzi',
        description: 'Description text here',
        images: [
          require('@/assets/projects/ticaret/ticaret-1.jpg'),
          require('@/assets/projects/ticaret/ticaret-2.jpg'),
          require('@/assets/projects/ticaret/ticaret-3.jpg'),
          require('@/assets/projects/ticaret/ticaret-4.jpg'),
          require('@/assets/projects/ticaret/ticaret-5.jpg'),
          require('@/assets/projects/ticaret/ticaret-6.jpg'),
          require('@/assets/projects/ticaret/ticaret-7.jpg'),
          require('@/assets/projects/ticaret/ticaret-8.jpg'),
          require('@/assets/projects/ticaret/ticaret-9.jpg'),
          require('@/assets/projects/ticaret/ticaret-10.jpg'),
          require('@/assets/projects/ticaret/ticaret-11.jpg'),
          require('@/assets/projects/ticaret/ticaret-12.jpg'),
          require('@/assets/projects/ticaret/ticaret-13.jpg'),
          require('@/assets/projects/ticaret/ticaret-14.jpg'),
          require('@/assets/projects/ticaret/ticaret-15.jpg'),
          require('@/assets/projects/ticaret/ticaret-16.jpg'),
        ]
      },
      {
        id: 7,
        title: 'Gəncə rayonundan',
        description: 'Description text here',
        images: [
          require('@/assets/projects/gence/gence-1.jpg'),
          require('@/assets/projects/gence/gence-2.jpg'),
          require('@/assets/projects/gence/gence-3.jpg'),
          require('@/assets/projects/gence/gence-4.jpg'),
          require('@/assets/projects/gence/gence-5.jpg'),
          require('@/assets/projects/gence/gence-6.jpg'),
          require('@/assets/projects/gence/gence-7.jpg'),
          require('@/assets/projects/gence/gence-8.jpg'),
          require('@/assets/projects/gence/gence-9.jpg'),
          require('@/assets/projects/gence/gence-10.jpg'),
          require('@/assets/projects/gence/gence-11.jpg'),
          require('@/assets/projects/gence/gence-12.jpg'),
          require('@/assets/projects/gence/gence-13.jpg'),
          require('@/assets/projects/gence/gence-14.jpg'),
          require('@/assets/projects/gence/gence-15.jpg'),
          require('@/assets/projects/gence/gence-16.jpg'),
          require('@/assets/projects/gence/gence-17.jpg'),

        ]
      },
      // {
      //   id: 1,
      //   title: '',
      //   description: 'Description text here',
      //   images: [
      //     '@/assets/images/backr'
      //   ]
      // },



    ],

    services: [
      {
        id: 1,
        title: 'Havalandırma Sistemləri',
        img: require('@/assets/services/havalandirma.jpg')
      },
      {
        id: 2,
        title: 'İsitmə Sistemləri',
        img: require('@/assets/services/istilik.jpg')
      },
      {
        id: 3,
        title: 'Soyutma Sistemləri',
        img: require('@/assets/services/soyutma.jpg')
      },
      {
        id: 4,
        title: 'Xüsusi avtomatik yanğın söndürmə sistemləri',
        img: require('@/assets/services/sondurme.jpg')
      },
      {
        id: 5,
        title: 'Dozimetrik ölçü cihazları',
        img: require('@/assets/services/dozimetr.jpg')
      },
      {
        id: 6,
        title: 'Servis Xidmətlərimiz',
        img: require('@/assets/services/servis-logo.webp')
      },
    ],
    products: [
      {
        id: 1,
        name: 'VRF SİSTEMİ',
        description: 'VRF SİSTEMİ – çox miqdarda binaların(məkanların)kondisiyalaşdırılması üçün təxsis edilmiş multisahəli kondisiyalaşdırma sistemidir. VRVF kondisionerlərinin quruluşu splind sisteminin quruluşundan bir xarici və bir çox daxili(2-dən 150-ə qədər)blokun olması ilə fərqlənir. Bir məkanda quraşdırılmış VRF sistemi havanı qızdırdığı kimi ,həm də soyuda bilir,bu isə onu ofis mərkəzləri,ticarət salonları,sənaye müəssisələri,çoxmərtəbəli binalar və s üçün müxtəlif iqlim şəraitinə uyğun ən optimal avadanlıq edir. VRF sistemi hər blokun idarəetmə pultunun köməkliyi ilə hava göstəricilərinin fərdi tənzimlənməsini təmin etməyə yol verir. ',
        img: require('@/assets/images/product/vrf.png')
      },
      {
        id: 2,
        name: 'Çiller',
        description: 'Binaların havalandırılması texnologiyasında geniş yayılanlardan biri də su soyuduculu sistemdir və yaxud proffesional dildə Çillerdir. Çiller mayeni-su və ya etilenqlikolu soyutmaq üçün avadanlıqdan təşkil olunmuşdur. Belə bir aqreqat böyük bir məkanı , elecə də bütün bir binanı soyutmağa qadirdir. Çiller suyu soyudur və onu məkanın daxilində quraşdırılmış fankoylun istilikdəyişdiricisinə , ya da havalandırmanın tərkibinə ötürür. Çillerlər bir və ya iki istilikdəyişdirici ilə istehsal olunur. Bununla əlaqədar olaraq sistem: ikiborulu-qaynar və soyuq istilikdaşıyıcı daxil olan (istilik nasosu ilə çillerdən)bir istilikdəyişdiricidən istifadə olunur;dördborulu-iki istilik dəyişdiricili. Birində istilikdaşıyıcı çillerdən, ikincidə isə isti su mərkəzi qızdırıcı sistemdən verilir.',
        img: require('@/assets/images/product/chiller.jpg')
      },
      {
        id: 3,
        name: 'Fankoyl',
        description: 'Fankoyl-binalarda müxəlif təyinatlar üçün quraşdırılan qurğudur.Onun əsas funksiyası havanın temperaturunu tənzimləməkdir. Fankoyllar,qaydalara uyğun olaraq, havalandırıcılı istilikdəyiştiricidən,filtrdən ,idarəedici pultdan ibarətdir.İstəkdən asılı olaraq,zəruri aksessuarlar əlavə oluna bilər. Fankoylun iş prinsipi aşağıdakılardan ibarətdir.Məkanda olan hava fankoylun istilikdəyiştiricisinə daxil olur.Orada hava lazımı temperaturu əldə edir-soyuyur və ya qızır.Fankoylun üstünlüyü odur ki,təmiz hava ona ya mərkəzi kondisionerdən ,ya da təchizatlı qurğudan daxil olur.Chiller və fankoyl sisteminin qurulması məkanlarda havalandırma probleminin həll olunmasına kömək edir. Fankoyl splid siseminin daxili blokunun analoqudur(əvəzedicisidir),lakin suda işləyir.Beləliklə, soyuq maye Chillerden Fankoyla ötürülür,hansiki o da öz növbəsində ona daxil olan havaya,mövcud məkana lazım olan temperatura qədər istilik ötürür.',
        img: require('@/assets/images/product/fankoyl.jpg')
      },
      {
        id: 5,
        name: 'AHU Havalandırma Sistemi',
        description: 'Təchizatlı-sorucu havalandırma sistemi ele qurulub ki, onlar havanın daxilə və xaricə axınını təmin edir. Binalarda təchizatlı-sorucu sistemdən istifadə havanın rütubətlilik dərəcəsini tənzimləməyə qadirdir. Böyük, iritutumlu binalarda (mehmanxanalarda,mərkəzi ofislərdə və s.) təchizatli-sorucu havalandırma sistemlərinin və güclü mərkəzli kondisionerlərin quraşdırılması daha aktualdır. Təchizatlı-sorucu havaladırma sistemi daxilində quraşdırılmış qızdırıcı avadanlığın (sulu və ya elektrik) və ya istiliyin rekuperasiyası adlanan vasitənin köməyi ilə havanın qızdırılmasını həyata keçirir. Rekuperasiya prinsipi ilə işləyən təchizatlı-sorucu havalandırma sistemindən istifadə zamanı temperatur qarşıdan gələn sorulan hava axınının istiliyi hesabına yüksəlir. Təchizatlı havalandırma sistemi binaya təmiz hava verilməsi üçün lazımdır. Bununla hava rekuperasiyanın və ya kaloriferin köməkliyi ilə qızır və tozdan təmizlənir. ',
        img: require('@/assets/images/product/ahu.jpg')
      },
      {
        id: 4,
        name: 'Hava Kanalları',
        description: 'Sifarişçinin təqdim etdiyi layihəyə əsasən havalandırma kanalları havanın miqdarından asılı olaraq hesablanır və layihə cizgisi sifarişçiyə təqdim edilir.',
        img: require('@/assets/images/product/hava.png')
      },

      {
        id: 6,
        name: 'Chemist 600 Emissiya Analizatoru',
        description: 'Chemist 600 analizatoru sənaye emissiyalarının təhlilinə həsr olunmuş alətlərimiz seriyasını açır. Chemist 600 daxili termal printerlə təchiz edilir və bu, tətbiq növündən asılı olaraq fərdiləşdirilə bilən 6-ya qədər müxtəlif qazı ölçə bilən yığcam, əl alətidir.',
        img: require('@/assets/images/product/chemist.jpg'),
        // require('@/assets/images/product/chemist1.jpg')

      },
      {
        id: 7,
        name: 'Stat-X® Fixed System: Electrical Units for Ordinary Locations',
        description: 'Engineered fire suppression systems have consistently proven to be the most effective means of providing fire protection for a space. In these cases, the fire suppression agent has been carefully chosen and application rates and densities have been calculated. As long as the system is inspected and maintained, it should perform as expected and provide extinguishment or suppression in the event a fire occurs in the protected area. A typical fire suppression system consists of the agent, a discharge mechanism, and some form of a fire detection system (such as smoke, flame, or heat detectors). The concept is simple—the fire detection system detects the presence of fire, and a signal is sent to the discharge mechanism resulting in release of the fire suppression agent.',
        img: require('@/assets/images/product/stat-x.png'),
      },
      {
        id: 8,
        name: 'Stat-X First Responder® Aerosol Fire Suppression Tool (FST)',
        description: 'The Stat-X First Responder® is an emergency-use, condensed aerosol fire suppression tool (FST) that should always be a component of your on-hand emergency response equipment. The Stat-X First Responder excels at containing and suppressing small early-stage fires in enclosed spaces before the fire becomes unmanageable and requires a full fire department response. When fire departments fight fire with water from hose streams, there is always a corresponding increase in damage and downtime. The Stat-X First Responder is a small, light, handheld device activated by a pull actuator. It is designed to be hand tossed into an enclosed space where there is an active fire. Three and a half seconds after the pin is pulled, the Stat-X First Responder activates, filling the space with Stat-X condensed aerosol agent, immediately suppressing the fire.',
        img: require('@/assets/images/product/stat-responder.png'),
      },
      {
        id: 9,
        name: 'Launch of GX-Force',
        description: 'The GX-Force can detect flammable gases, Oxygen and toxic gases (Carbon monoxide and Hydrogen sulfide), which are cause explosion/Oxygen deficiency/poisoning accidents quickly and reliably by built-in pump aspiration. The CO/H2S dual sensor enables to reduces the number of sensors from four to three, and the dimension and weight have been downsized',
        img: require('@/assets/images/product/GX-Force.jpg'),
      },
      {
        id: 10,
        name: 'Launch of AC-2S Series',
        description: 'In the 35 years since the launch of the first AC-1 system, the AC Series has continued to meet the requirements of researchers in the field of materials research. With the world striving to achieve decarbonization, the growing use of and interest in hydrogen energy and renewable energy have generated unprecedented demand for the rapid development of high-performance materials. To meet this demand, Riken Keiki has developed the AC-2S Series to spread the use of atmospheric photoelectron yield spectrometers and spur new value creation.',
        img: require('@/assets/images/product/AC-2S.png'),
      },
      {
        id: 11,
        name: 'Daily-Weekly programmable thermostat Freetime Evo Radio',
        description: 'Do you want to change the thermostat, without having to carry out building work? Freetime Evo Radio is the right choice for you. This wireless programmable thermostat communicates via radio with the appropriate receiver positioned in the boiler room, allowing you to install the thermostat without the constraint of wiring.',
        img: require('@/assets/images/product/thermo.png'),
      },
      {
        id: 12,
        name: 'Hygge radio wireless receiver',
        description: 'Radio receiver for heating / cooling systems equipped with an integrated antenna, an output with SPDT relay and an RS485 Modbus® RTU slave communication port. Two-color LED to indicate the status of the output relay and the quality of the radio link with the relative transmitter. Self-learning of the transmission code. Equipped with bidirectional wireless technology, it allows you to receive commands from hygge thermostats to directly drive, via the relay, actuators, circulators, valves, shutters, fans, boilers or, via Modbus® communication, boilers, heat pumps or other heating systems / coolers also of modulating type',
        img: require('@/assets/images/product/Hygge.png'),
      },
      {
        id: 13,
        name: 'Heated diode refrigerant gas leak detector',
        description: 'The be cool R1 refrigerant leak detector is the tool to reliably detect all common refrigerants, thanks to the heated diode sensor. Different sensitivity levels allow the user to detect also smallest leaks, with indication on the display or with an alarm. Highly sensitive, responsive and long-lasting sensor. Reliable and easy detection of refrigerant leaks, with Automatic or Manual modes. Detection of most common refrigerants: CFCs, HFCs, HCFCs, HFOs and blends.',
        img: require('@/assets/images/product/Heated.png'),
      },
      {
        id: 14,
        name: 'Gas sampling probe handle for Chemist series',
        description: 'This gas sampling probe handle allows to use the probe designed for the Novo analyzer even with the Chemist analyzers. It features an interchangeable tip. Available in two different cable length: 1,8 m or 3 m. ',
        img: require('@/assets/images/product/gas.png'),
      },
      {
        id: 15,
        name: 'Wireless refrigerant scale (up to 100 kg)',
        description: 'The be cool B100 wireless refrigerant scale allows you to weight refrigerant gases (up to 100 kg / 220 lb) in a simple, accurate and fast way. Management and display of measured values can be done with the Seitron be cool mobile App. Stable and accurate sensor for a reliable measurement, Robust aluminum scale, with impact-resistant rubber corners, easy to transport in the handy case, Scale measurement with handheld controller or via smartphone. The kit includes: Refrigerant Scale, Handhold controller, Alkaline batteries, Transport bag, Quick Guide ',
        img: require('@/assets/images/product/wireless.png'),
      },
      {
        id: 16,
        name: 'Methane and CO gas leakage detector Beagle Double',
        description: 'Domestic gas and carbon monoxide (CO) and methane detector with facility for driving 230V~ cut-off valves or fans. Test button.     Not compliant with EN 50291.',
        img: require('@/assets/images/product/methane.png'),
      },
      {
        id: 17,
        name: 'Smart Vacuum Gauge',
        description: 'The be cool V1 digital vacuum gauge with rechargeable batteries allows you, to measure the vacuum of refrigeration systems and heat pumps in a precise and easy way. Seitron be cool mobile app allows you to monitor and transmit data in real time. Simple data visualization on wide display, Real-time data monitoring and transfer via mobile App, Offline data recording. The kit includes: Vacuum Gauge, Li-ion Battery, Quick Guide.',
        img: require('@/assets/images/product/smart-vacum.png'),
      },
      {
        id: 18,
        name: '4-Way digital manifold',
        description: 'Be cool M4 is the digital manifold with four-way valve block, equipped with a rechargeable battery. The execution of measurements on refrigeration and air conditioning systems and on heat pumps are facilitated by pre-configured parameters, such as superheating and subcooling, in addition to the possibility to reverse pressures on the instrument. The instrument can be remotely controlled and managed with Seitron be cool Mobile App. Pressure reversal set by the user on the instrument, Selection from more than 80 refrigerant gases (included R410, R32, R404), Intuitive and simple interface on a 5’’ touch color display, Real-time data analysis, also with mobile App, Possibility to read and export data via USB, Ideal for commissioning, servicing and maintenance of refrigeration and air conditioning systems and heat pumps.        ',
        img: require('@/assets/images/product/digital.png'),
      },
      {
        id: 19,
        name: 'Smoke sampling probe handle',
        description: 'The new flue gas probe has been specifically developed for the Novo analyzer. The probe features an interchangeable rod and a single connection for pressure, flue gases and temperature. This allows to connect the probe with a single gesture while granting a perfect hold. Available in two lengths: AJSJ01 - 1,80 m, AJSJ02 - 3 m',
        img: require('@/assets/images/product/smoke.png'),
      },
      {
        id: 20,
        name: 'Threshold mode CO gas leak detector Segugio',
        description: 'Microprocessor based domestic carbon monoxide detector with output for cut-off valves, fans or any other electrical actuators with 230V~ power supply. Carbon monoxide detection with threshold mode. Not compliant with EN 50291',
        img: require('@/assets/images/product/threshold.png'),
      },
      {
        id: 21,
        name: 'Gas Leak Detector XP-702III',
        description: 'Simple gas leak detector which is perfect for tracing small gas leaks. Inspection for leaks from gas outlets, rubber tubes and pipe joints of gas pipes and air conditioners. Soft case, Drain filter, Filter element, Gas probe, Dust filter, Hand strap,2 x AA alkaline battery, Instruction manual',
        img: require('@/assets/images/product/leak.jpg'),
      },
      {
        id: 22,
        name: 'Multi Gas Detector XP-3368II-W / XP-3368II ',
        description: 'Self-diagnosis (sensor error), Zero adjustment, Battery level indication, Flashlight, Peak-hold, LCD backlight, Audio alarm muting during gas alarm, Time indication, Alarm test, Alarm volume change, Audio muting',
        img: require('@/assets/images/product/XP-3368.jpg'),
      },
      {
        id: 23,
        name: 'Multi Gas Detector XA-4400II',
        description: 'Self-diagnosis (sensor trouble), Automatic air adjustment, Remaining battery level, Peak-hold, LCD backlight, Buzzer stop for gas alarm, Time & Temperature indication, Alarm test, Buzzer volume, Silent mode, Long-life mode, Data logging (datalogger kitis necessary for logging)',
        img: require('@/assets/images/product/Xa-4400.jpg'),
      },
      {
        id: 24,
        name: 'Personal Oxygen Monitor XO-2200',
        description: 'Pocket-sized personal oxygen monitor. For safety check by wearing in tank, manhole, tunnel construction, hold and bottom etc. Can be used continuously for 5000 hours. Available with loud buzzer, alarm lamp from 4 dimensions, peak hold function. Thin, lightweight design.',
        img: require('@/assets/images/product/personal.jpg'),
      },
      {
        id: 25,
        name: 'Digital Oxygen Indicator XO-326IIs',
        description: 'For safety check by wearing in tank, manhole, tunnel construction, hold and bottom etc. Continuously for up to 15,000 hours with 2 x AA alkaline batteries. Automatic Air Adjustment. Plug-in sensor installed.',
        img: require('@/assets/images/product/indicator.jpg'),
      },
      {
        id: 26,
        name: 'Portable Semiconductor Gas Detector XPS-7II',
        description: 'For gas leak inspection and concentration measurement at semiconductor factory where there is toxic gas. World’s Smallest Portable Gas Detector for NF3 Detection. NF3 can be detected without any optional equipment.The calibrated gas sensor unit can be replaced on site, reducing maintenance work.',
        img: require('@/assets/images/product/portable.jpg'),
      },
      {
        id: 27,
        name: 'Carbon Monoxide Detector XP-333IIA',
        description: 'Suitable for maintenance of gas-fired boiler, gas water heater, etc. For measurement of carbon monoxide concentration in the combustion exhaust gas due to incomplete combustion of gas equipment. Detection range is 0 to 0.499vol% for CO. High sensitivity and selectivity sensor for CO3 different audible and visual alarm levels.',
        img: require('@/assets/images/product/carbon.jpg'),
      },
      {
        id: 28,
        name: 'Real-time VOC monitor XP-3120-V',
        description: 'Portable VOC monitor suitable for on-site measurement of comprehensive VOCs. Oil & Gas, Industrial Safety, Environmental Measurement, Indoor Air Quality. Able to monitor concentration changes with data-logging function.',
        img: require('@/assets/images/product/real.jpg'),
      },
      {
        id: 29,
        name: 'Portable VOC Analyzer XG-100V',
        description: 'Low concentration VOC can be analyzed with a high degree of accuracy. Measurement for VOC in indoor. VOC inspection of electrical appliances. Easily transportable to use on site.',
        img: require('@/assets/images/product/analyzer.jpg'),
      },
      {
        id: 30,
        name: 'Grease Steel Dust Meter SDM-72',
        description: 'Able to diagnose the bearing condition, even long before wear-induced vibration becomes detectable, by measuring the amount of steel dust in the grease around the bearing. Simple diagnosis and trend monitoring of the wear condition of greased bearings, gears, etc.',
        img: require('@/assets/images/product/grease.jpg'),
      },
      {
        id: 31,
        name: 'Model 3007 Series',
        description: 'The Model 3007 Series of neutron dose survey meters combines a handheld digital meter with a 19.5 cm (7.7 in.) diameter REM ball containing a 3He detector to measure and monitor neutron radiation. Several versions of these instruments are available. The Model 3007 and Model 3007B use similar detectors that only differ by the boron concentration in the internal borated layer. The Model 3007 has a lower boron concentration and offers a typical sensitivity of 10 cpm per μSv/h (100 cpm per mrem/hr), but tends to overrespond in the 5 keV range. The Model 3007B has a higher boron concentration and a lower sensitivity, typically 4.5 cpm per μSv/h (45 cpm per mrem/hr), but does not have the same overresponse issue. The Model 3007-1 has a higher pressure detector that offers greater sensitivity, typically 17 cpm per µSv/h (170 cpm per mrem/hr), but falls under shipping regulations due to the pressure (see note on Configurations tab). “i” versions include an internal gamma detector in the meter for exposure or dose measurements. See Configurations tab for available versions.',
        img: require('@/assets/images/product/m3007.png')
      },
      {
        id: 32,
        name: 'Model 26S\n',
        description: 'The Ludlum Model 26S incorporates electronics and a miniature scintillation detector in an ergonomically designed, ruggedly-constructed, and water-resistant housing. The integrated unit doesn’t have a detector cable, thereby simplifying the process of frisking. The optimized configuration includes a standard 1 x 1 equivalent detector, loud Sigma audio, and large auto-ranging LCD display with automatic backlighting. These features are combined in one convenient package making it easy to detect and measure gamma fields.\n' +
            '\n' +
            'Operation of the Model 26S is kept simple through the use of just three buttons that are strategically placed for one-handed operation. Three modes of operation – RATE, MAX, and COUNT – are available. The RATE mode displays current radiation levels in terms of rate. MAX mode captures the highest rate detected so it is possible to determine a peak rate during frisking operations when the display is not visible. COUNT mode allows the operator to perform a survey for a predetermined time. The user-selected units can display results in a measurement of scaler counts, activity (disintegrations), time-averaged rates, or even accumulated dose.',
        img: require('@/assets/images/product/m26s.png')
      },
      {
        id: 33,
        name: 'Model 194 Dose Equivalent Rate Meter',
        description: 'Features: Accurate (Energy-Flat) Ambient Dose Equivalent Rate Measurements, Eliminates High False Readings of Typical microR Meters, Rugged Scintillator Will Not Leak, Low Range: Background to 19.99 µSv/h (1999 µrem/hr), High Range: 1 to 1999 µSv/h (0.1 to 199.9 mrem/hr), Improved Replacement for Bicron Microrem, "/E" Extended Version Has Low-Energy, 3.2 mg/cm2 Window for Operation Below 50 keV',
        img: require('@/assets/images/product/m194e.png')
      },
      {
        id: 34,
        name: 'Model 3003 Series',
        description: 'Multi-Detector Ratemeter / SCA. The Model 3003 is a durable, lightweight instrument designed for alpha, beta, gamma, or neutron radiation survey. It can support up to four external detectors, each with its own set of calibration and user parameters. The Model 3003i is a version that includes an internal GM or scintillation detector. The instrument features a large, easy-to-read LCD screen and audible alarms and is controlled using a simple seven-button interface. The unit body is made of high-impact plastic and splash resistant construction allows the instrument to be used outdoors. Four modes of operation are available – RATE, MAX, INTG, and COUNT – which can be selected by pressing the MODE button. Measurements can be collected in two sets of units (primary and secondary) for RATE, MAX, and DOSE modes, unless alpha-beta detection is selected.The user can switch between the two sets of units by pressing the UNITS button. The DETECTOR button is used to switch between the active detector settings, indicated by the colored LEDs above the control buttons. ',
        img: require('@/assets/images/product/m3003.png')
      },
      {
        id: 35,
        name: 'Model 3014',
        description: 'Dual-Detector Digital Survey Meter / SCA. The Ludlum Model 3014 is a durable, lightweight instrument with both an internal energy-compensated gamma detector and a connection for an external detector. It features a large, easy-to-read LCD screen and audible alarms and is controlled using a simple five-button interface. The unit body is made of high-impact plastic and splash-resistant construction allows the instrument to be used outdoors.',
        img: require('@/assets/images/product/m3014.png')
      },
      {
        id: 36,
        name: 'Model 3078 Series',
        description: 'The Model 3078 Series Stretch Scopes are designed to survey areas for gamma radiation while maintaining distance from potentially high radiation fields. These instruments include external GM detectors mounted at the end of a 4.7 m (15.3 ft.) carbon fiber telescoping pole, allowing the detector to reach areas difficult to access with other types of instruments. The Model 3078i versions have an additional internal GM or scintillation detector for monitoring user dose exposure.',
        img: require('@/assets/images/product/m3078.png')
      },
      {
        id: 37,
        name: 'Model 3101',
        description: 'Portable Tritium in Air Monitor. The Model 3101 Tritium in Air Monitor features ruggedized and flexible operation. It is powered by rechargeable internal NiMH batteries and/or an external +12 Vdc power supply. It features a maintenance-free diaphragm air pump to pull air through the 250 cc tritium chamber, and the air flow is measured internally with a mass-air flow sensor. A second 250 cc chamber is used to provide gamma compensation, allowing operation in higher gamma fields. Other internal sensors measure temperature and ambient pressure and provide compensation for these effects.',
        img: require('@/assets/images/product/m3101.png')
      },
      {
        id: 38,
        name: 'Model 3277/1',
        description: 'Alpha-Beta Frisker. The Model 3277/1 is a wall-mount or desktop instrument that can be used for frisking personnel or objects for alpha and beta contamination. A large, color touch-screen displays alpha and beta readings simultaneously, and dual tone click-audio enables the user to easily distinguish between alpha and beta contamination. Power is supplied by either an internal, rechargeable battery or a 100 - 240 Vdc wall transformer. Battery life is approximately 8 hours under normal usage.',
        img: require('@/assets/images/product/m3277.png')
      },
      // {
      //   id: 39,
      //   name: '',
      //   description: '',
      //   img: require('@/assets/images/product/grease.jpg')
      // },




    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
