import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  Check,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Building2,
  UserCircle,
  FileCheck,
  Briefcase,
  ShoppingBag,
  Brain,
  BarChart3,
  Calculator,
  TrendingUp,
  Shield,
  Code2,
  BookOpen,
  FileSearch,
  Bell,
  Wallet,
  FileText,
  Receipt,
  Users,
  Package,
  CreditCard,
} from "lucide-react"
import clsx from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs))
}

// ─── Shared UI Primitives ────────────────────────────────────────────────────

const Badge = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div
    className={cn(
      "inline-flex items-center px-3 py-1 rounded-md text-xs font-bold bg-primary/10 text-primary",
      className,
    )}
  >
    {children}
  </div>
)

const PrimaryButton = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <button
    className={cn(
      "inline-flex items-center justify-center px-6 py-3 bg-primary text-on-primary font-medium text-sm rounded-md transition-colors hover:bg-[#005a35] active:scale-[0.98]",
      className,
    )}
  >
    {children}
  </button>
)

const SecondaryButton = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <button
    className={cn(
      "inline-flex items-center justify-center px-6 py-3 bg-transparent border border-on-surface/20 text-on-surface font-medium text-sm rounded-md transition-colors hover:bg-surface-container-low active:scale-[0.98]",
      className,
    )}
  >
    {children}
  </button>
)

// ─── Navbar mega-menu data ───────────────────────────────────────────────────

const productItems = [
  { icon: Building2, title: "CZAR Core", description: "Your financial operating system for business." },
  { icon: UserCircle, title: "CZAR Personal", description: "Personal tax and financial compliance for individuals." },
  { icon: FileCheck, title: "CZAR Execute", description: "We prepare and handle your compliance filings." },
  { icon: Briefcase, title: "CZAR Pro", description: "A workspace for accountants and tax professionals." },
  { icon: ShoppingBag, title: "CZAR Marketplace", description: "Connect with verified tax and financial professionals." },
]

const solutionItems = [
  { icon: Brain, title: "Understand Financial Events", description: "Turn transactions and business activity into structured financial intelligence." },
  { icon: Shield, title: "Automate Compliance", description: "Know what applies to your business and when action is required." },
  { icon: BarChart3, title: "Automate Accounting", description: "Turn financial activity into structured accounting records and reports." },
  { icon: Calculator, title: "Simplify Tax", description: "Calculate, understand and manage your tax obligations." },
  { icon: FileCheck, title: "Execute Filings", description: "Prepare and handle regulatory filings without unnecessary complexity." },
  { icon: TrendingUp, title: "Make Better Financial Decisions", description: "Turn financial history into actionable intelligence and better business decisions." },
]

const developerItems = [
  { icon: BookOpen, title: "API Documentation", description: "Explore endpoints, authentication and implementation examples." },
  { icon: Shield, title: "Compliance API", description: "Programmatic access to CZAR compliance intelligence." },
  { icon: Calculator, title: "Tax Calculation API", description: "Programmatic access to Nigerian tax calculations." },
  { icon: FileSearch, title: "Document Verification API", description: "Extract and verify structured information from financial and regulatory documents." },
  { icon: Bell, title: "Deadline & Alerts API", description: "Integrate compliance deadlines and alerts into your own products." },
]

const calculatorItems = [
  { title: "PIT Calculator", description: "Personal Income Tax" },
  { title: "VAT Calculator", description: "Value Added Tax" },
  { title: "WHT Calculator", description: "Withholding Tax" },
  { title: "CIT Calculator", description: "Company Income Tax" },
  { title: "PAYE Calculator", description: "Pay As You Earn" },
  { title: "Stamp Duty Calculator", description: "Stamp Duty" },
]

// ─── Mega-menu sub-components ────────────────────────────────────────────────

const MenuPanel = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("bg-surface-container-lowest border border-outline-variant/20 rounded-xl shadow-[0_8px_32px_rgba(4,2,34,0.10)] overflow-hidden", className)}>
    {children}
  </div>
)

const MenuSectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-[0.12em] mb-3 px-1">{children}</p>
)

const MenuFooterLink = ({ children }: { children: React.ReactNode }) => (
  <div className="border-t border-outline-variant/15 px-5 py-3">
    <a href="#" className="inline-flex items-center gap-1.5 text-[11px] font-bold text-primary uppercase tracking-wider hover:opacity-70 transition-opacity">
      {children}
      <ArrowRight size={11} strokeWidth={2.5} />
    </a>
  </div>
)

const MenuItem = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <a href="#" className="group flex items-start gap-3 p-3 rounded-lg hover:bg-surface-container-low transition-colors">
    <div className="mt-0.5 shrink-0 w-8 h-8 rounded-[8px] bg-surface-container border border-outline-variant/20 flex items-center justify-center text-on-surface-variant group-hover:text-primary group-hover:border-primary/15 transition-colors">
      <Icon size={14} strokeWidth={1.75} />
    </div>
    <div>
      <div className="text-sm font-semibold text-on-surface leading-snug">{title}</div>
      <div className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">{description}</div>
    </div>
  </a>
)

const ProductMenu = () => (
  <MenuPanel className="w-[400px]">
    <div className="p-5">
      <MenuSectionLabel>Product</MenuSectionLabel>
      <div className="flex flex-col gap-0.5">
        {productItems.map((item) => <MenuItem key={item.title} {...item} />)}
      </div>
    </div>
    <MenuFooterLink>Explore All Products</MenuFooterLink>
  </MenuPanel>
)

const SolutionsMenu = () => (
  <MenuPanel className="w-[540px]">
    <div className="p-5">
      <MenuSectionLabel>Solutions</MenuSectionLabel>
      <div className="grid grid-cols-2 gap-0.5">
        {solutionItems.map((item) => <MenuItem key={item.title} {...item} />)}
      </div>
    </div>
    <MenuFooterLink>Explore How CZAR Works</MenuFooterLink>
  </MenuPanel>
)

const DevelopersMenu = () => (
  <MenuPanel className="w-[480px]">
    <div className="p-5">
      <MenuSectionLabel>Developers</MenuSectionLabel>
      <a href="#" className="group flex items-start gap-4 p-4 rounded-xl bg-surface-container border border-outline-variant/20 hover:border-primary/20 transition-colors mb-3">
        <div className="shrink-0 w-10 h-10 rounded-[10px] bg-primary/10 border border-primary/15 flex items-center justify-center text-primary">
          <Code2 size={18} strokeWidth={1.75} />
        </div>
        <div>
          <div className="text-sm font-bold text-on-surface leading-snug">CZAR API</div>
          <div className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">Compliance and financial intelligence infrastructure for African platforms.</div>
        </div>
      </a>
      <div className="grid grid-cols-2 gap-0.5">
        {developerItems.map((item) => <MenuItem key={item.title} {...item} />)}
      </div>
    </div>
    <MenuFooterLink>Build With CZAR</MenuFooterLink>
  </MenuPanel>
)

const CalculatorsMenu = () => (
  <MenuPanel className="w-[360px]">
    <div className="p-5">
      <MenuSectionLabel>Calculators</MenuSectionLabel>
      <div className="grid grid-cols-2 gap-0.5">
        {calculatorItems.map((item) => (
          <a key={item.title} href="#" className="group flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors">
            <div className="shrink-0 w-7 h-7 rounded-md bg-surface-container border border-outline-variant/20 flex items-center justify-center text-on-surface-variant group-hover:text-primary group-hover:border-primary/15 transition-colors">
              <Calculator size={13} strokeWidth={1.75} />
            </div>
            <div>
              <div className="text-xs font-semibold text-on-surface leading-tight">{item.title}</div>
              <div className="text-[11px] text-on-surface-variant leading-tight mt-0.5">{item.description}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
    <MenuFooterLink>View All Calculators</MenuFooterLink>
  </MenuPanel>
)

// ─── Navbar ──────────────────────────────────────────────────────────────────

const dropdownIds = ["product", "solutions", "developers", "calculators"] as const
type DropdownId = (typeof dropdownIds)[number]

const dropdownLabels: Record<DropdownId, string> = {
  product: "Product",
  solutions: "Solutions",
  developers: "Developers",
  calculators: "Calculators",
}

const mobileSections: Record<DropdownId, string[]> = {
  product: productItems.map((i) => i.title),
  solutions: solutionItems.map((i) => i.title),
  developers: ["CZAR API", ...developerItems.map((i) => i.title)],
  calculators: calculatorItems.map((i) => i.title),
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<DropdownId | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<DropdownId | null>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openMenu = (id: DropdownId) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    setActiveMenu(id)
  }

  const scheduleClose = () => {
    closeTimeoutRef.current = setTimeout(() => setActiveMenu(null), 200)
  }

  const toggleMobile = (id: DropdownId) =>
    setMobileExpanded((prev) => (prev === id ? null : id))

  return (
    <nav className="fixed top-0 left-0 right-0 h-[72px] z-50 bg-surface/80 backdrop-blur-[20px] border-b border-outline-variant/30 flex items-center px-4 md:px-8 lg:px-[80px]">
      <div className="flex items-center justify-between w-full max-w-[1280px] mx-auto">
        <div className="flex items-center gap-8 lg:gap-12">
          <div className="font-bold text-xl tracking-tight flex items-center gap-2 z-50">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-on-primary">C</div>
            CZAR
          </div>

          <div className="hidden lg:flex items-center gap-0.5">
            {dropdownIds.map((id) => (
              <div key={id} className="relative" onMouseEnter={() => openMenu(id)} onMouseLeave={scheduleClose}>
                <button
                  className={cn(
                    "text-sm font-medium transition-colors px-3 py-2 rounded-md inline-flex items-center gap-1",
                    activeMenu === id
                      ? "text-primary bg-surface-container-low"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low",
                  )}
                  aria-expanded={activeMenu === id}
                  aria-haspopup="true"
                >
                  {dropdownLabels[id]}
                  <ChevronDown size={14} strokeWidth={2} className={cn("transition-transform duration-200", activeMenu === id && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {activeMenu === id && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.12, ease: "easeOut" }}
                      className="absolute top-full left-0 pt-2"
                      style={{ zIndex: 60 }}
                      onMouseEnter={() => openMenu(id)}
                      onMouseLeave={scheduleClose}
                    >
                      {id === "product" && <ProductMenu />}
                      {id === "solutions" && <SolutionsMenu />}
                      {id === "developers" && <DevelopersMenu />}
                      {id === "calculators" && <CalculatorsMenu />}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <a href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-surface-container-low">
              Pricing
            </a>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Sign In</a>
          <PrimaryButton className="py-2 px-4 text-sm">Get Started</PrimaryButton>
        </div>

        <button className="lg:hidden p-2 z-50 text-on-surface" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.18 }}
            className="absolute top-[72px] left-0 right-0 bg-surface-container-lowest border-b border-outline-variant/30 shadow-lg p-3 flex flex-col gap-0.5 lg:hidden max-h-[80vh] overflow-y-auto"
          >
            {dropdownIds.map((id) => {
              const isExpanded = mobileExpanded === id
              return (
                <div key={id}>
                  <button
                    className="w-full flex items-center justify-between p-3 rounded-md text-base font-medium text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors"
                    onClick={() => toggleMobile(id)}
                  >
                    {dropdownLabels[id]}
                    <ChevronDown size={16} strokeWidth={2} className={cn("transition-transform duration-200", isExpanded && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-2 flex flex-col gap-0.5">
                          {mobileSections[id].map((title) => (
                            <a key={title} href="#" className="text-sm text-on-surface-variant hover:text-primary p-2.5 rounded-md hover:bg-surface-container-low transition-colors" onClick={() => setIsOpen(false)}>
                              {title}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
            <a href="#" className="text-base font-medium text-on-surface-variant hover:text-primary p-3 rounded-md hover:bg-surface-container-low transition-colors" onClick={() => setIsOpen(false)}>
              Pricing
            </a>
            <hr className="border-outline-variant/30 my-1 mx-1" />
            <a href="#" className="text-base font-medium text-on-surface-variant hover:text-primary p-3 rounded-md hover:bg-surface-container-low transition-colors" onClick={() => setIsOpen(false)}>
              Sign In
            </a>
            <PrimaryButton className="w-full justify-center mt-1 h-12">Get Started</PrimaryButton>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// ─── How CZAR Works — section data ──────────────────────────────────────────

const inputSources = [
  { icon: Wallet, label: "Bank Account" },
  { icon: FileText, label: "Invoices" },
  { icon: Receipt, label: "Expenses" },
  { icon: Users, label: "Payroll" },
  { icon: Package, label: "Inventory" },
  { icon: CreditCard, label: "Payments" },
]

const outputTiles = [
  { icon: BookOpen, label: "Accounting", sub: "Records & reports" },
  { icon: Shield, label: "Compliance", sub: "Obligations & deadlines" },
  { icon: FileText, label: "Tax", sub: "Liabilities & filings" },
  { icon: TrendingUp, label: "Intelligence", sub: "Insights & decisions" },
]

// ─── Transaction transformation micro-animation ──────────────────────────────

const TransactionViz = ({ prefersReduced }: { prefersReduced: boolean }) => {
  const [phase, setPhase] = useState(1)

  useEffect(() => {
    if (prefersReduced) return
    let timeouts: ReturnType<typeof setTimeout>[] = []

    const cycle = () => {
      setPhase(1)
      timeouts.push(setTimeout(() => setPhase(2), 1600))
      timeouts.push(setTimeout(() => setPhase(3), 2900))
      timeouts.push(setTimeout(() => setPhase(4), 4300))
      timeouts.push(
        setTimeout(() => {
          setPhase(0)
          timeouts.push(setTimeout(cycle, 700))
        }, 7800),
      )
    }

    timeouts.push(setTimeout(cycle, 600))
    return () => timeouts.forEach(clearTimeout)
  }, [prefersReduced])

  const visible = prefersReduced ? 4 : phase

  return (
    <div className="mt-5 flex flex-col items-center gap-2.5">
      {/* Raw transaction */}
      <AnimatePresence>
        {visible >= 1 && (
          <motion.div
            key="raw"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full rounded-xl border border-outline-variant/30 bg-surface-container p-3.5"
          >
            <p className="text-[9px] font-bold text-on-surface-variant/50 uppercase tracking-[0.12em] mb-1.5">Raw Transaction</p>
            <p className="text-[22px] font-black text-on-surface tracking-tight leading-none">₦250,000</p>
            <p className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-widest mt-1">POS Transfer</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Arrow */}
      <AnimatePresence>
        {visible >= 2 && (
          <motion.div
            key="arrow"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col items-center gap-0 origin-top"
          >
            <div className="w-px h-4 bg-primary/30" />
            <ChevronDown size={12} strokeWidth={2.5} className="text-primary/50 -mt-1" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Financial event */}
      <AnimatePresence>
        {visible >= 3 && (
          <motion.div
            key="event"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full rounded-xl border border-primary/25 bg-primary/[0.04] p-3.5"
          >
            <p className="text-[9px] font-bold text-primary/60 uppercase tracking-[0.12em] mb-1.5">Financial Event</p>
            <p className="text-sm font-bold text-on-surface leading-snug mb-2">Customer Payment</p>
            <div className="flex flex-wrap gap-1.5">
              {["Revenue", "VAT implication"].map((tag) => (
                <span key={tag} className="text-[10px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Branches */}
      <AnimatePresence>
        {visible >= 4 && (
          <motion.div
            key="branches"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-1.5"
          >
            {["Revenue", "VAT", "Accounting", "Cash Position"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08, duration: 0.25 }}
                className="text-[10px] font-semibold border border-outline-variant/40 text-on-surface-variant px-2.5 py-1 rounded-full bg-surface-container-lowest"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Stage connector ─────────────────────────────────────────────────────────

const StageConnector = ({
  signalActive,
  prefersReduced,
}: {
  signalActive: boolean
  prefersReduced: boolean
}) => (
  <>
    {/* Desktop: horizontal */}
    <div className="hidden lg:flex items-center justify-center w-10 xl:w-12 shrink-0 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-outline-variant/30" />
      </div>
      <div className="relative z-10 w-[22px] h-[22px] rounded-full bg-surface-container-lowest border border-outline-variant/25 flex items-center justify-center">
        <ChevronRight size={10} strokeWidth={2.5} className="text-on-surface-variant/40" />
      </div>
      {signalActive && !prefersReduced && (
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 left-0 w-2 h-2 rounded-full bg-primary shadow-[0_0_6px_rgba(0,109,64,0.5)]"
          initial={{ x: -8 }}
          animate={{ x: 56 }}
          transition={{ duration: 0.85, ease: "easeInOut" }}
        />
      )}
    </div>

    {/* Mobile: vertical */}
    <div className="flex lg:hidden items-center justify-center h-10 relative overflow-hidden">
      <div className="absolute inset-0 flex justify-center">
        <div className="h-full w-px bg-outline-variant/30" />
      </div>
      <div className="relative z-10 w-[22px] h-[22px] rounded-full bg-surface-container-lowest border border-outline-variant/25 flex items-center justify-center">
        <ChevronDown size={10} strokeWidth={2.5} className="text-on-surface-variant/40" />
      </div>
    </div>
  </>
)

// ─── How CZAR Works section ──────────────────────────────────────────────────

const HowCzarWorks = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" })
  const prefersReduced = useReducedMotion() ?? false

  const [signalPhase, setSignalPhase] = useState(0)

  useEffect(() => {
    if (prefersReduced) return
    let t1: ReturnType<typeof setTimeout>
    let t2: ReturnType<typeof setTimeout>
    let t3: ReturnType<typeof setTimeout>

    const run = () => {
      setSignalPhase(1)
      t1 = setTimeout(() => setSignalPhase(2), 2000)
      t2 = setTimeout(() => setSignalPhase(0), 3800)
    }

    const interval = setInterval(run, 5200)
    t3 = setTimeout(run, 1400)

    return () => {
      clearInterval(interval)
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [prefersReduced])

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.55, ease: "easeOut" as const, delay },
  })

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="how-czar-works-heading"
    >
      {/* Subtle atmospheric glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,_var(--color-primary-container)_0%,_transparent_65%)] opacity-[0.07] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8 lg:px-[80px]">

        {/* Section header */}
        <motion.div {...fadeUp(0)} className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <p className="text-[11px] font-bold text-primary uppercase tracking-[0.14em] mb-4">
            How CZAR Works
          </p>
          <h2
            id="how-czar-works-heading"
            className="text-[28px] md:text-[40px] lg:text-[48px] font-black leading-[1.1] tracking-[-0.035em] text-on-surface mb-5"
          >
            From financial activity
            <br />
            to financial clarity.
          </h2>
          <p className="text-base lg:text-lg text-on-surface-variant leading-[1.65] max-w-xl mx-auto">
            CZAR brings your business's financial activity together, understands what each event means, and turns that understanding into accounting, compliance, and better financial decisions.
          </p>
        </motion.div>

        {/* Three-stage pipeline */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex flex-col lg:flex-row items-stretch"
        >
          {/* ── Stage 01: Connect ─────────────────────── */}
          <div className="flex-1 rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-7 lg:p-8 flex flex-col">
            <div className="mb-5">
              <p className="text-[11px] font-bold text-primary/70 uppercase tracking-[0.1em] mb-4">
                01 — Connect
              </p>
              <h3 className="text-lg font-bold text-on-surface leading-snug mb-2">
                Connect your financial world
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Bring your business activity into CZAR through connected financial accounts, invoices, expenses, payroll and other records.
              </p>
            </div>

            <div className="mt-auto">
              <p className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-[0.1em] mb-3">
                Financial sources
              </p>
              <div className="flex flex-wrap gap-2">
                {inputSources.map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 6 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.06, ease: "easeOut" }}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-surface-container border border-outline-variant/20 text-[11px] font-medium text-on-surface-variant"
                  >
                    <Icon size={11} strokeWidth={1.75} className="text-on-surface-variant/70 shrink-0" />
                    {label}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <StageConnector signalActive={signalPhase === 1} prefersReduced={prefersReduced} />

          {/* ── Stage 02: Understand ──────────────────── */}
          <div className="flex-1 lg:flex-[1.1] rounded-2xl border border-outline-variant/20 bg-surface-container-lowest shadow-[0_4px_24px_rgba(4,2,34,0.06)] p-7 lg:p-8 flex flex-col relative">
            {/* Green top accent on center stage */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="mb-5">
              <p className="text-[11px] font-bold text-primary/70 uppercase tracking-[0.1em] mb-4">
                02 — Understand
              </p>
              <h3 className="text-lg font-bold text-on-surface leading-snug mb-2">
                CZAR understands what happened
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                CZAR transforms raw financial activity into structured financial events and determines what each event means for your business.
              </p>
            </div>

            <div className="mt-auto">
              <p className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-[0.1em] mb-0">
                Event transformation
              </p>
              <TransactionViz prefersReduced={prefersReduced} />
            </div>
          </div>

          <StageConnector signalActive={signalPhase === 2} prefersReduced={prefersReduced} />

          {/* ── Stage 03: Act ─────────────────────────── */}
          <div className="flex-1 rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-7 lg:p-8 flex flex-col">
            <div className="mb-5">
              <p className="text-[11px] font-bold text-primary/70 uppercase tracking-[0.1em] mb-4">
                03 — Act
              </p>
              <h3 className="text-lg font-bold text-on-surface leading-snug mb-2">
                Turn understanding into action
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                The information CZAR understands becomes useful business output — across accounting, compliance, tax, and financial intelligence.
              </p>
            </div>

            <div className="mt-auto">
              <p className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-[0.1em] mb-3">
                Business outputs
              </p>
              <div className="grid grid-cols-2 gap-2">
                {outputTiles.map(({ icon: Icon, label, sub }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 6 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.07, ease: "easeOut" }}
                    className="p-3 rounded-xl bg-surface-container border border-outline-variant/20 hover:border-primary/20 hover:bg-primary/[0.03] transition-colors group"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <Icon size={12} strokeWidth={1.75} className="text-primary shrink-0" />
                      <span className="text-[11px] font-bold text-on-surface uppercase tracking-wide">{label}</span>
                    </div>
                    <p className="text-[11px] text-on-surface-variant leading-snug">{sub}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] pointer-events-none mix-blend-overlay" />

      <Navbar />

      <main>
        {/* Hero */}
        <div className="relative overflow-hidden pt-[110px] pb-20 md:pt-[130px] md:pb-24 lg:pt-[150px] lg:pb-32 px-4 md:px-[80px] max-w-[1440px] mx-auto min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center gap-6 z-10 relative w-full">
              <div className="absolute -inset-20 bg-[radial-gradient(circle_at_center,_var(--color-primary-container)_0%,_transparent_50%)] opacity-10 blur-3xl pointer-events-none -z-10" />

              <Badge>AI-native Financial Operating System</Badge>

              <h1 className="text-[36px] md:text-[64px] font-black leading-[1.1] tracking-[-0.04em] text-on-surface">
                Your business already tells a financial story.
                <br className="block md:hidden" />
                <span className="hidden md:inline"> </span>
                <span className="text-primary opacity-90">CZAR understands it.</span>
              </h1>

              <p className="text-lg text-on-surface-variant leading-[1.6] max-w-2xl mx-auto">
                From bank transactions and invoices to payroll, inventory, taxes and compliance, CZAR understands every financial event inside your business and transforms it into accounting, reporting and intelligent financial decisions.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 w-full">
                <PrimaryButton className="w-full sm:w-auto h-14 text-base px-8">Get Started</PrimaryButton>
                <SecondaryButton className="w-full sm:w-auto h-14 text-base px-8">Explore Product</SecondaryButton>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-outline-variant/20 w-full max-w-3xl mx-auto">
                {["Understand Financial Events", "Automate Compliance", "Make Better Decisions"].map((point, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
                    <div className="w-4 h-4 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* How CZAR Works */}
        <HowCzarWorks />
      </main>
    </div>
  )
}
