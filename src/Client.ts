/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Links } from "./api/resources/links/client/Client";
import { Accounts } from "./api/resources/accounts/client/Client";
import { Transactions } from "./api/resources/transactions/client/Client";
import { Balances } from "./api/resources/balances/client/Client";
import { Institutions } from "./api/resources/institutions/client/Client";
import { Owners } from "./api/resources/owners/client/Client";
import { Invoices } from "./api/resources/invoices/client/Client";
import { TaxReturns } from "./api/resources/taxReturns/client/Client";
import { TaxStatus } from "./api/resources/taxStatus/client/Client";
import { TaxComplianceStatus } from "./api/resources/taxComplianceStatus/client/Client";
import { Incomes } from "./api/resources/incomes/client/Client";
import { RecurringExpenses } from "./api/resources/recurringExpenses/client/Client";
import { InvestmentPortfolios } from "./api/resources/investmentPortfolios/client/Client";
import { ReceivableTransactions } from "./api/resources/receivableTransactions/client/Client";
import { RiskInsights } from "./api/resources/riskInsights/client/Client";
import { TaxRetentions } from "./api/resources/taxRetentions/client/Client";
import { TaxDeclarations } from "./api/resources/taxDeclarations/client/Client";
import { EmploymentRecords } from "./api/resources/employmentRecords/client/Client";
import { IncomeVerification } from "./api/resources/incomeVerification/client/Client";
import { Categorization } from "./api/resources/categorization/client/Client";
import { SecretKeys } from "./api/resources/secretKeys/client/Client";
import { PaymentWebhooks } from "./api/resources/paymentWebhooks/client/Client";
import { PaymentInstitutions } from "./api/resources/paymentInstitutions/client/Client";
import { Customers } from "./api/resources/customers/client/Client";
import { BankAccounts } from "./api/resources/bankAccounts/client/Client";
import { PaymentLinks } from "./api/resources/paymentLinks/client/Client";
import { PaymentIntents } from "./api/resources/paymentIntents/client/Client";
import { PaymentTransactions } from "./api/resources/paymentTransactions/client/Client";

export declare namespace BelvoApiClient {
    interface Options {
        environment: string;
        credentials: core.Supplier<core.BasicAuth>;
    }
}

export class BelvoApiClient {
    constructor(protected readonly options: BelvoApiClient.Options) {}

    protected _links: Links | undefined;

    public get links(): Links {
        return (this._links ??= new Links(this.options));
    }

    protected _accounts: Accounts | undefined;

    public get accounts(): Accounts {
        return (this._accounts ??= new Accounts(this.options));
    }

    protected _transactions: Transactions | undefined;

    public get transactions(): Transactions {
        return (this._transactions ??= new Transactions(this.options));
    }

    protected _balances: Balances | undefined;

    public get balances(): Balances {
        return (this._balances ??= new Balances(this.options));
    }

    protected _institutions: Institutions | undefined;

    public get institutions(): Institutions {
        return (this._institutions ??= new Institutions(this.options));
    }

    protected _owners: Owners | undefined;

    public get owners(): Owners {
        return (this._owners ??= new Owners(this.options));
    }

    protected _invoices: Invoices | undefined;

    public get invoices(): Invoices {
        return (this._invoices ??= new Invoices(this.options));
    }

    protected _taxReturns: TaxReturns | undefined;

    public get taxReturns(): TaxReturns {
        return (this._taxReturns ??= new TaxReturns(this.options));
    }

    protected _taxStatus: TaxStatus | undefined;

    public get taxStatus(): TaxStatus {
        return (this._taxStatus ??= new TaxStatus(this.options));
    }

    protected _taxComplianceStatus: TaxComplianceStatus | undefined;

    public get taxComplianceStatus(): TaxComplianceStatus {
        return (this._taxComplianceStatus ??= new TaxComplianceStatus(this.options));
    }

    protected _incomes: Incomes | undefined;

    public get incomes(): Incomes {
        return (this._incomes ??= new Incomes(this.options));
    }

    protected _recurringExpenses: RecurringExpenses | undefined;

    public get recurringExpenses(): RecurringExpenses {
        return (this._recurringExpenses ??= new RecurringExpenses(this.options));
    }

    protected _investmentPortfolios: InvestmentPortfolios | undefined;

    public get investmentPortfolios(): InvestmentPortfolios {
        return (this._investmentPortfolios ??= new InvestmentPortfolios(this.options));
    }

    protected _receivableTransactions: ReceivableTransactions | undefined;

    public get receivableTransactions(): ReceivableTransactions {
        return (this._receivableTransactions ??= new ReceivableTransactions(this.options));
    }

    protected _riskInsights: RiskInsights | undefined;

    public get riskInsights(): RiskInsights {
        return (this._riskInsights ??= new RiskInsights(this.options));
    }

    protected _taxRetentions: TaxRetentions | undefined;

    public get taxRetentions(): TaxRetentions {
        return (this._taxRetentions ??= new TaxRetentions(this.options));
    }

    protected _taxDeclarations: TaxDeclarations | undefined;

    public get taxDeclarations(): TaxDeclarations {
        return (this._taxDeclarations ??= new TaxDeclarations(this.options));
    }

    protected _employmentRecords: EmploymentRecords | undefined;

    public get employmentRecords(): EmploymentRecords {
        return (this._employmentRecords ??= new EmploymentRecords(this.options));
    }

    protected _incomeVerification: IncomeVerification | undefined;

    public get incomeVerification(): IncomeVerification {
        return (this._incomeVerification ??= new IncomeVerification(this.options));
    }

    protected _categorization: Categorization | undefined;

    public get categorization(): Categorization {
        return (this._categorization ??= new Categorization(this.options));
    }

    protected _secretKeys: SecretKeys | undefined;

    public get secretKeys(): SecretKeys {
        return (this._secretKeys ??= new SecretKeys(this.options));
    }

    protected _paymentWebhooks: PaymentWebhooks | undefined;

    public get paymentWebhooks(): PaymentWebhooks {
        return (this._paymentWebhooks ??= new PaymentWebhooks(this.options));
    }

    protected _paymentInstitutions: PaymentInstitutions | undefined;

    public get paymentInstitutions(): PaymentInstitutions {
        return (this._paymentInstitutions ??= new PaymentInstitutions(this.options));
    }

    protected _customers: Customers | undefined;

    public get customers(): Customers {
        return (this._customers ??= new Customers(this.options));
    }

    protected _bankAccounts: BankAccounts | undefined;

    public get bankAccounts(): BankAccounts {
        return (this._bankAccounts ??= new BankAccounts(this.options));
    }

    protected _paymentLinks: PaymentLinks | undefined;

    public get paymentLinks(): PaymentLinks {
        return (this._paymentLinks ??= new PaymentLinks(this.options));
    }

    protected _paymentIntents: PaymentIntents | undefined;

    public get paymentIntents(): PaymentIntents {
        return (this._paymentIntents ??= new PaymentIntents(this.options));
    }

    protected _paymentTransactions: PaymentTransactions | undefined;

    public get paymentTransactions(): PaymentTransactions {
        return (this._paymentTransactions ??= new PaymentTransactions(this.options));
    }
}
